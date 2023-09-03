import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

const NavLinks = [
    {
        label: "Sobre",
        href: "#sobre",
    },
    {
        label: "Recursos",
        href: "#recursos",
    },
    {
        label: "Depoimentos",
        href: "#depoimentos",
    },
];

export function Navbar() {
    return (
        <div className="py-8 fixed w-full max-w-[1216px] top-0 left-1/2 -translate-x-1/2 flex justify-between items-center">
            <div className="flex gap-16 items-center">
                <Link href="/">
                    <Image
                        src="/logo-color.svg"
                        alt="Border-IA"
                        width={192}
                        height={42}
                    />
                </Link>
                <nav className="flex gap-8">
                    {NavLinks.map((link) => (
                        <Link
                            className="text-gray-05 hover:brightness-125 transition-all"
                            key={link.href}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
            <Button variant="secondary" className="">
                Comunidade
            </Button>
        </div>
    );
}
