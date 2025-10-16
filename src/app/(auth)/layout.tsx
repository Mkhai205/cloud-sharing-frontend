export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10"
            style={{
                backgroundImage: "url(/bg2.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {children}
        </div>
    );
}
