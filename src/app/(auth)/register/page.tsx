import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import { Loading } from "@/components/common/Loading";
import { LockKeyhole, Share2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/common/Icons";

export default function RegisterPage() {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center h-screen">
                    <Loading variant="dots" size="lg" text="Loading" />
                </div>
            }
        >
            <div className="flex flex-col gap-8">
                <Card className="!p-0 overflow-hidden border-0 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl">
                    <CardContent className="grid p-0 md:grid-cols-2 max-w-4xl">
                        <div className="flex flex-col items-center justify-center gap-4 p-4 md:py-8">
                            <RegisterForm />
                            <div className="w-full flex gap-2 justify-around mt-4">
                                <div className="flex-1 relative after:absolute after:inset-0 after:top-1/2 after:border-t after:border-gray-400" />
                                <p>Or continue with</p>
                                <div className="flex-1 relative after:absolute after:inset-0 after:top-1/2 after:border-t after:border-gray-400" />
                            </div>
                            <div className="w-full grid px-3">
                                <Button
                                    variant="outline"
                                    className="hover-lift ripple-effect p-5 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-lg 
                                    transition-all duration-300 group relative overflow-hidden cursor-pointer"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <GoogleIcon />
                                    Continue with Google
                                </Button>
                            </div>
                            <div className=" text-center">
                                <span className="">Already have an account? </span>
                                <Link
                                    href="/login"
                                    className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                        <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
                            <div className="absolute top-30 left-30 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />

                            <div className="relative z-10 text-center space-y-8 px-16">
                                <div className="space-y-6">
                                    <div className="flex justify-center space-x-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                            <Share2 className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                            <ShieldCheck className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                            <LockKeyhole className="w-6 h-6 text-sky-500" />
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">
                                        Upload & Share
                                    </h3>
                                    <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                                        Securely upload and share your files with end-to-end
                                        encryption
                                    </p>
                                </div>

                                <div className="flex flex-col space-y-4 text-sm text-slate-500 ml-6">
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <span>Easy to use</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span>End-to-end encrypted</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span>Free forever</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="text-center text-sm text-slate-950">
                    By signing up, you agree to our{" "}
                    <Link
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                    >
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </Suspense>
    );
}
