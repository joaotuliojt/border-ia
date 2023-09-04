import Image from "next/image";
import { Button } from "../Button";

export function CardPlugin() {
    return (
        <div className="w-60 md:w-[calc(20.25rem_+_1px)] p-[1px] rounded-xl absolute right-1/2 top-0 -translate-y-[20%] translate-x-1/2 xl:right-[6.87rem] xl:top-0 bg-gradient-to-r from-gradient-1 to-gradient-2 xl:-translate-y-[140px]">
            <div className="p-[1.85rem] md:p-10 bg-gray-11 rounded-xl flex flex-col md:gap-7 gap-5">
                <header className="flex justify-between items-center">
                    <Image
                        className="md:w-14 md:h-10 w-10 h-auto"
                        src="/logo.svg"
                        alt="Cartão roxo e rosa"
                        width={56}
                        height={40}
                    />
                    <Image
                        className="md:w-8 md:h-8 w-6 h-6"
                        src="/assets/icons/list.svg"
                        alt="Traços"
                        width={32}
                        height={32}
                    />
                </header>
                <p className="text-center text-lg text-gray-04 text-[0.83331rem] md:text-heading-h7">
                    Magic copy
                </p>
                <div className="bg-gray-10 md:p-4 p-[0.84rem] md:rounded-md rounded-[0.18519rem] border-[1px] border-gray-09">
                    <p className="text-[0.64813rem] md:text-sm">
                        Crie exemplos de headline para meu produto
                    </p>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <Image
                        className="animate-spin"
                        src="/assets/icons/circle.svg"
                        alt="Traços"
                        width={32}
                        height={32}
                    />
                    <p className="text-[0.64813rem] md:text-[0.875rem]">
                        Generating...
                    </p>
                </div>
                <div className="relative">
                    <Button className="md:py-3 py-[0.56rem] normal-case w-full text-[0.74075rem] md:text-heading-h8">
                        <Image
                            className="md:w-6 md:h-6 w-[1.1111rem] h-[1.1111rem]"
                            src="/assets/icons/sparkle.svg"
                            alt="Traços"
                            width={24}
                            height={24}
                        />
                        Start now
                    </Button>
                    <div className="pointer-events-none opacity-40 md:w-44 md:h-48 rounded-[86px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 bg-gradient-to-r from-gradient-1 to-gradient-2 blur-3xl"></div>
                </div>
            </div>
            <div className="hidden xl:block absolute top-0 left-14 -translate-y-full w-1 h-screen bg-gradient-to-b from-[#C082FF] to-[#7967FF]" />
            <Image
                className="absolute left-0 top-0 -translate-y-full hidden xl:block"
                src="/assets/dot-grid-effect.svg"
                alt="Dots"
                height={645}
                width={182}
            />
            <div className="hidden xl:block absolute top-0 left-14 -translate-y-full bg-gradient-to-b from-[#C082FF] to-[#7967FF] w-44 h-screen blur-[150px] opacity-30"></div>
        </div>
    );
}
