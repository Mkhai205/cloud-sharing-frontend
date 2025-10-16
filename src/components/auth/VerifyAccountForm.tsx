"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Loader2, CircleAlert } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { appAxios } from "@/lib/axios";
import { useUserContext } from "@/context/userContext";
import { Loading } from "../common/Loading";

export default function VerifyAccountForm() {
    const router = useRouter();
    const { isAuthenticated, loading: userLoading, setUser, setIsAuthenticated } = useUserContext();
    const [verificationCode, setVerificationCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [timer, setTimer] = useState<number>(60);
    const searchParams = useSearchParams();

    const email: string = searchParams.get("email") || "";

    const handleVerify = async () => {
        if (verificationCode.length !== 6) {
            setStatus("error");
            setErrorMessage("Please enter a complete 6-digit code");
            return;
        }

        setIsLoading(true);
        setStatus("idle");

        try {
            const response = await appAxios.post("/verify-account", {
                email,
                verificationCode,
            });

            if (response.status === 200) {
                setStatus("success");
                setVerificationCode("");
                setUser(response.data.user);
                setIsAuthenticated(true);
                console.log("Verification successful:", response.data.message);
            } else {
                setStatus("error");
                setErrorMessage("Invalid verification code. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
            console.log("Verification error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleResend = async () => {
        setVerificationCode("");
        setStatus("idle");

        try {
            const response = await appAxios.post("/auth/resend-verification", { email });

            if (response.status === 200) {
                setTimer(60); // Reset timer to 60 seconds
                console.log("Resend OTP response:", response.data.message);
            } else {
                setStatus("error");
                setErrorMessage("Failed to resend code. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to resend code. Please try again.");
            console.error("Resend code error:", error);
        }
    };

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [timer]);

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/dashboard");
        }
    }, [isAuthenticated, router]);

    if (userLoading) {
        return <Loading variant="dots" size="lg" text="Loading" />;
    }

    if (isAuthenticated) {
        return null; // Prevent rendering while redirecting
    }

    return (
        <Card className="w-md mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Verify Your Account</CardTitle>
                <CardDescription>
                    {`We've sent a 6-digit verification code to your email address. Enter the code
                        below to continue.`}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                    <InputOTP
                        maxLength={6}
                        value={verificationCode}
                        onChange={(value) => {
                            setVerificationCode(value);
                            if (status === "error") {
                                setStatus("idle");
                                setErrorMessage("");
                            }
                        }}
                        disabled={isLoading || status === "success"}
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>

                    <div className="text-center text-sm text-muted-foreground">
                        Enter the 6-digit code sent to your email
                    </div>
                </div>

                {status === "error" && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                )}

                {status === "success" && (
                    <Alert className="border-green-200 bg-green-50">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                            Verification successful! Redirecting you now...
                        </AlertDescription>
                    </Alert>
                )}

                <div className="space-y-3">
                    <Button
                        onClick={handleVerify}
                        disabled={
                            verificationCode.length !== 6 || isLoading || status === "success"
                        }
                        className="w-full cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Verifying...
                            </>
                        ) : status === "success" ? (
                            <>
                                <CheckCircle2 className="mr-2 h-4 w-4" />
                                Verified
                            </>
                        ) : (
                            "Verify Code"
                        )}
                    </Button>

                    <div className="text-center">
                        <span className="text-sm text-muted-foreground">
                            {`Didn't receive the code?`}{" "}
                        </span>
                        <Button
                            variant="link"
                            onClick={handleResend}
                            disabled={isLoading || status === "success" || timer > 0}
                            className="p-0 h-auto text-sm cursor-pointer hover:text-blue-600"
                        >
                            Resend code
                        </Button>
                    </div>

                    {timer > 0 && (
                        <Alert>
                            <CircleAlert className="h-4 w-4" />
                            <AlertDescription>
                                Resend code available in {timer} seconds
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
