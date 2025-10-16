import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { UserProvider } from "@/context/userContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cloud Sharing",
    description: "Next generation file sharing app",
    icons: {
        icon: "/cloud-sharing.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth" suppressContentEditableWarning={true}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <UserProvider>{children}</UserProvider>
                <Toaster position="top-center" />
            </body>
        </html>
    );
}
