import Image from "next/image";
import { Button } from "../Button";

export function Banner() {
    return (
        <div className="mt-36 bg-gray-10 py-20 px-4 md:px-0 flex flex-col items-center justify-center gap-6 relative rounded-xl overflow-hidden">
            <div className="flex items-center justify-center gap-6 md:flex-row flex-col">
                <div className="flex items-center">
                    <Image
                        src="/assets/avatars/pics-1.png"
                        alt="Pessoa"
                        width={54}
                        height={54}
                        className="-mx-3"
                    />
                    <Image
                        src="/assets/avatars/pics-2.png"
                        alt="Pessoa"
                        width={54}
                        height={54}
                        className="-mx-3"
                    />
                    <Image
                        src="/assets/avatars/pics-3.png"
                        alt="Pessoa"
                        width={54}
                        height={54}
                        className="-mx-3"
                    />
                    <Image
                        src="/assets/avatars/pics.png"
                        alt="Pessoa"
                        width={54}
                        height={54}
                        className="-mx-3"
                    />
                </div>
                <p className="font-medium text-tag uppercase text-gray-05 text-center md:text-left">
                    Mais de +5.000 designers <br /> já estão utilizado
                </p>
            </div>
            <div>
                <h3 className="text-center text-heading-h5 md:text-heading-h3 bg-clip-text bg-gradient-to-r from-[#EFDEFF] to-[#7967FF] text-transparent ">
                    Concentre-se no design,
                    <br /> não na rotina
                </h3>
            </div>
            <div className="w-full flex items-center justify-center">
                <Button className="bg-none bg-indigo-01 text-gray-11 md:w-auto w-full">
                    <Image
                        src="/assets/icons/figma-black.svg"
                        alt=""
                        width={24}
                        height={24}
                    />
                    Usar no figma
                </Button>
            </div>
            <div className="absolute w-64 h-64 bg-dot-grid bg-center bg-no-repeat bg-cover -left-6 -top-6 rotate-180"></div>
            <div className="absolute w-64 h-64 bg-dot-grid bg-center bg-no-repeat bg-cover -right-6 -bottom-6"></div>
        </div>
    );
}
