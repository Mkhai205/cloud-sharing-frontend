"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CustomInput from "../common/CustomInput";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { appAxios } from "@/lib/axios";

export function LoginForm() {
    const router = useRouter();
    const { isAuthenticated, setIsAuthenticated } = useUserContext();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);

        // verify if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await appAxios.post("/auth/login", {
                email,
                password,
            });
            setIsAuthenticated(true);
            console.log("LoginForm response:", response.data);
        } catch (error) {
            toast.error("Failed to login. Please try again.");
            console.error("LoginForm error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/dashboard");
        }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <CustomInput
                label="Email"
                placeholder="Enter your email"
                state={email}
                setState={setEmail}
                autocomplete="email"
            />

            <CustomInput
                label="Password"
                placeholder="Enter your password"
                state={password}
                setState={setPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autocomplete="current-password"
            />

            <div className="flex justify-start">
                <Link
                    href="/forgot-password"
                    className="text-sm text-card-foreground/70 hover:text-card-foreground font-sans transition-colors"
                >
                    Forgot your password?
                </Link>
            </div>

            <Button
                type="submit"
                disabled={isLoading}
                className={`w-full ripple-effect hover-lift font-bold py-5 transition-all duration-300 ${
                    isLoading
                        ? "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 cursor-not-allowed opacity-80"
                        : "bg-sky-400/80 hover:bg-sky-400 cursor-pointer"
                }`}
            >
                {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading...</span>
                    </div>
                ) : (
                    "Sign in"
                )}
            </Button>
        </form>
    );
}
