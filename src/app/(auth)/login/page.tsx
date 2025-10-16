import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GoogleIcon } from "@/components/common/Icons";
import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <>
            {/* Floating glass orbs for visual interest */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-50 animate-pulse"
                    style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        boxShadow:
                            "0 8px 32px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                    }}
                ></div>
                <div
                    className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full opacity-40 animate-pulse delay-1000"
                    style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        boxShadow:
                            "0 8px 32px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                    }}
                ></div>
                <div
                    className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full opacity-45 animate-pulse delay-500"
                    style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        boxShadow:
                            "0 8px 32px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                    }}
                ></div>
            </div>

            <Card
                className="min-w-sm md:min-w-md hover-lift shadow-2xl relative z-10 opacity-100 border-transparent"
                style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(40px) saturate(250%)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow:
                        "0 32px 80px rgba(0, 0, 0, 0.3), 0 16px 64px rgba(255, 255, 255, 0.2), inset 0 3px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.3)",
                }}
            >
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="ext-2xl md:text-3xl font-bold text-slate-900">
                        Welcome Back To Cloud Sharing
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-900">
                        Sign in to your account to continue
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <LoginForm />

                    <div className="w-full flex gap-2 justify-around">
                        <div className="flex-1 relative after:absolute after:inset-0 after:top-1/2 after:border-t after:border-gray-400" />
                        <p>Or continue with</p>
                        <div className="flex-1 relative after:absolute after:inset-0 after:top-1/2 after:border-t after:border-gray-400" />
                    </div>

                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="w-full glass-effect border-white/30 hover-lift ripple-effect text-card-foreground 
                            hover:bg-white/20 font-sans transition-all duration-300 cursor-pointer"
                        >
                            <GoogleIcon />
                            Continue with Google
                        </Button>
                    </div>

                    <div className=" text-center">
                        <span className="">{`Don't have account? `}</span>
                        <Link
                            href="/register"
                            className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                        >
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
