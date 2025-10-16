"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HomeSections } from "@/lib/constants";

export default function Narbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    // Function to handle smooth scroll with offset for fixed navbar
    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // Extra offset for better visual spacing
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        closeMobileMenu(); // Close mobile menu after click
    };

    return (
        <>
            {/* Mobile Navbar */}
            <div className="md:hidden w-full h-16 fixed top-0 shadow-lg shadow-sky-300/50 backdrop-blur-md z-50 px-4">
                <div className="w-full h-full flex flex-row items-center justify-between">
                    {/* Logo */}
                    <Link href="#" className="h-auto w-auto flex flex-row items-center">
                        <Image
                            src="/cloud-sharing.png"
                            alt="logo"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                        <span className="font-bold ml-2 text-slate-900 text-lg">Cloud Sharing</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="hover:text-sky-400 transition-colors duration-300 cursor-pointer"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-sky-100 backdrop-blur-md border-t border-sky-300">
                        <div className="flex flex-col p-4 space-y-4">
                            {/* Navigation Links */}
                            {HomeSections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => handleScrollToSection(section.id)}
                                    className="text-slate-900 hover:text-sky-400 transition-colors duration-300 py-2 border-b border-slate-800 last:border-b-0 text-left"
                                >
                                    {section.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop and Laptop Navbar */}
            <div className="hidden md:block w-full h-16 fixed top-0 shadow-lg  shadow-sky-300/50 backdrop-blur-md z-50 px-4">
                <div className="w-full h-full flex flex-row items-center justify-between m-auto">
                    <Link href="#" className="h-auto w-auto flex flex-row items-center">
                        <Image
                            src="/cloud-sharing.png"
                            alt="logo"
                            width={36}
                            height={36}
                            className="cursor-pointer"
                        />

                        <span className="hidden lg:block font-bold ml-[10px] text-slate-900 text-xl">
                            Cloud Sharing
                        </span>
                    </Link>

                    <div className="lg:-ml-20 flex items-center w-fit h-full">
                        <div
                            className="flex items-center justify-between gap-5 w-full border 
                            border-sky-300 bg-sky-50 px-5 py-3 rounded-full text-slate-900"
                        >
                            {HomeSections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => handleScrollToSection(section.id)}
                                    className="cursor-pointer hover:-translate-y-0.5 hover:text-sky-300 shadow-sky-300 transition-all duration-300"
                                >
                                    {section.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}
