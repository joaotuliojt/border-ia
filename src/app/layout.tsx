import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Border-IA",
    description:
        "Plugin para figma que utiliza inteligência artificial para ajudar designers a projetarem interfaces com mais rapidez.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <head>
                <link rel="icon" href="/logo.svg" sizes="any" />
            </head>
            <body className={`${spaceGrotesk.className} overflow-x-hidden`}>
                <main className="bg-gray-11 ">
                    <Navbar />
                    <div className="w-full max-w-[1216px] mx-auto text-white px-8 xl:px-0">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
