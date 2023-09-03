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
        <div className="backdrop-blur-sm bg-gray-11/20 sticky left-0 top-0 right-0 z-50">
            <div className="py-8 flex justify-between items-center max-w-[1216px] mx-auto sm:px-8 xs:px-0 ">
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
        </div>
    );
}
