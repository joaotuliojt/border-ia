import Image from "next/image";
import { Button } from "../Button";

export function CardPlugin() {
    return (
        <div className="w-[calc(20.25rem_+_1px)] p-[1px] rounded-xl absolute right-[6.87rem] top-0 bg-gradient-to-r from-gradient-1 to-gradient-2 -translate-y-[140px]">
            <div className="p-10 bg-gray-11 rounded-xl flex flex-col gap-7">
                <header className="flex justify-between items-center">
                    <Image
                        src="/logo.svg"
                        alt="Cartão roxo e rosa"
                        width={56}
                        height={40}
                    />
                    <Image
                        src="/assets/icons/list.svg"
                        alt="Traços"
                        width={32}
                        height={32}
                    />
                </header>
                <p className="text-center text-lg text-gray-04">Magic copy</p>
                <div className="bg-gray-10 p-4 rounded-md border-[1px] border-gray-09">
                    <p className="text-sm">
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
                    <p>Generating...</p>
                </div>
                <div className="relative">
                    <Button className="py-3 normal-case w-full">
                        <Image
                            src="/assets/icons/sparkle.svg"
                            alt="Traços"
                            width={24}
                            height={24}
                        />
                        Start now
                    </Button>
                    <div className="pointer-events-none opacity-40 w-44 h-48 rounded-[86px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 bg-gradient-to-r from-gradient-1 to-gradient-2 blur-3xl"></div>
                </div>
            </div>
            <div className="absolute top-0 left-14 -translate-y-full w-1 h-screen bg-gradient-to-b from-[#C082FF] to-[#7967FF]" />
            <Image
                className="absolute left-0 top-0 -translate-y-full"
                src="/assets/dot-grid-effect.svg"
                alt="Dots"
                height={645}
                width={182}
            />
            <div className="absolute top-0 left-14 -translate-y-full bg-gradient-to-b from-[#C082FF] to-[#7967FF] w-44 h-screen blur-[150px] opacity-30"></div>
        </div>
    );
}
