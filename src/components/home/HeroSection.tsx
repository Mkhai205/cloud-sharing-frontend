import Image from "next/image";

import { assets } from "@/assets/assets";

export default function HeroSection() {
    return (
        <div className="home-page-content relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-80 z-0 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Share Files Securely with</span>
                            <span className="block text-sky-500/80">Cloud Sharing</span>
                        </h1>

                        <p className="mt-3 max-w-md mx-auto text-base text-slate-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Upload, share, and manage your files with ease and security. Access them
                            from anywhere, anytime.
                        </p>

                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div className="mx-auto inline-grid grid-cols-2 gap-5">
                                <button className="flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-md text-white bg-green-600/90 hover:bg-green-600 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                                    Get Started
                                </button>
                                <button className="flex items-center justify-center px-6 py-3 border-1 border-green-600 font-medium rounded-md text-slate-900 bg-white md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-auto rounded-lg shadow-xl overflow-hidden">
                        <Image
                            src={assets.dashboard}
                            alt="cloud sharing dashboard"
                            className="w-full h-full object-center object-cover rounded-lg"
                            priority
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 opacity-10 rounded-lg"></div>
                </div>

                <div className="mt-8 text-center">
                    <p className="my-4 text-base text-slate-600">
                        All your files are encrypted and stored securely in the cloud.
                    </p>
                </div>
            </div>
        </div>
    );
}
