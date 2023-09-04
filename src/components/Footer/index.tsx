import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-10 mt-48 border-t-[1px] border-gray-08">
            <div className="flex justify-between items-center md:flex-row flex-col md:gap-0 gap-10">
                <div>
                    <Image
                        src={"/logo-color.svg"}
                        alt="Border-IA"
                        width={192}
                        height={40}
                    />
                </div>
                <div className="flex gap-4">
                    <Link
                        href={""}
                        className="flex items-center justify-center bg-gray-10 border-[1px] border-gray-09 w-12 h-12 rounded-md hover:brightness-125 transition-all"
                    >
                        <Image
                            src="/assets/icons/instagram.svg"
                            alt="GitHub"
                            width={32}
                            height={32}
                        />
                    </Link>
                    <Link
                        href={""}
                        className="flex items-center justify-center bg-gray-10 border-[1px] border-gray-09 w-12 h-12 rounded-md hover:brightness-125 transition-all"
                    >
                        <Image
                            src="/assets/icons/discord.svg"
                            alt="GitHub"
                            width={32}
                            height={32}
                        />
                    </Link>
                    <Link
                        href={""}
                        className="flex items-center justify-center bg-gray-10 border-[1px] border-gray-09 w-12 h-12 rounded-md hover:brightness-125 transition-all"
                    >
                        <Image
                            src="/assets/icons/github.svg"
                            alt="GitHub"
                            width={32}
                            height={32}
                        />
                    </Link>
                </div>
                <div>
                    <p className="text-center md:text-right text-text-16 text-gray-05">
                        Desenvolvido por: <br /> Jonas Milan & André Valentim
                    </p>
                </div>
            </div>
        </footer>
    );
}
