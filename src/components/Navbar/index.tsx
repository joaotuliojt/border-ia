import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { Menu } from "../Menu";

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
            <div className="py-8 flex justify-between items-center max-w-[1216px] mx-auto px-8 xl:px-0">
                <div className="flex gap-16 items-center">
                    <Link href="/">
                        <Image
                            className="md:block hidden"
                            src="/logo-color.svg"
                            alt="Border-IA"
                            width={192}
                            height={42}
                        />
                        <Image
                            className="md:hidden block"
                            src="/logo.svg"
                            alt="Border-IA"
                            width={55}
                            height={40}
                        />
                    </Link>
                    <nav className="hidden gap-8 md:flex ">
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
                <div className="flex items-center gap-4">
                    <Button variant="secondary" className="">
                        Comunidade
                    </Button>
                    <Menu />
                </div>
            </div>
        </div>
    );
}
