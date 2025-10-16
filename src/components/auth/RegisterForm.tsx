"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { appAxios } from "@/lib/axios";
import CustomInput from "../common/CustomInput";

export function RegisterForm() {
    const router = useRouter();
    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
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

        // verify if password is strong enough
        const passwordRegex = /^.{6,}$/; // at least 6 characters
        if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 6.");
            setIsLoading(false);
            return;
        }

        // verify if password and confirmPassword are the same
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await appAxios.post("/users/register", {
                email,
                password,
                firstName,
                lastName,
            });
            router.push(`/verify-account?email=${email}`);
            console.log("LoginForm response:", response.data);
        } catch (error) {
            toast.error("Failed to submit email. Please try again.");
            console.error("LoginForm error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 w-full max-w-sm">
                <div className="flex flex-col items-center text-center gap-3 mb-4">
                    <div className="flex items-center justify-center">
                        <Image src="/cloud-sharing.png" alt="logo" width={50} height={50} />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                        Welcome To Cloud Sharing
                    </h1>
                    <p></p>
                </div>
                <div className="grid grid-cols-2 grid-rows-4 gap-3">
                    <div>
                        <CustomInput
                            label="Last Name"
                            state={lastName}
                            setState={setLastName}
                            placeholder="Enter your last name"
                            autocomplete="family-name"
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="First Name"
                            state={firstName}
                            setState={setFirstName}
                            placeholder="Enter your first name"
                            autocomplete="given-name"
                        />
                    </div>
                    <div className="col-span-2">
                        <CustomInput
                            label="Email Address"
                            state={email}
                            setState={setEmail}
                            placeholder="Enter your email"
                            autocomplete="email"
                        />
                    </div>
                    <div className="col-span-2 row-start-3">
                        <CustomInput
                            label="Password"
                            state={password}
                            setState={setPassword}
                            placeholder="Enter your password"
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            autocomplete="new-password"
                        />
                    </div>
                    <div className="col-span-2 row-start-4">
                        <CustomInput
                            label="Confirm Password"
                            state={confirmPassword}
                            setState={setConfirmPassword}
                            placeholder="Confirm your password"
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            autocomplete="new-password"
                        />
                    </div>
                </div>
                <Button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full ripple-effect hover-lift font-bold py-5 transition-all duration-300 rounded-lg ${
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
                        "Sign up"
                    )}
                </Button>
            </div>
        </form>
    );
}
