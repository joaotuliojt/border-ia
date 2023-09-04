import Image from "next/image";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { CardPlugin } from "../CardPlugin";

export function About() {
    return (
        <section className="mt-20 relative">
            <div className="flex-col gap-6 md:inline-flex flex">
                <div className="md:block flex items-center justify-center">
                    <Tag label="Figma Plugin" />
                </div>
                <div>
                    <h1 className="text-gray-01 font-medium md:text-heading-h1 text-heading-h5 md:text-left text-center">
                        Acelere sua criação
                        <label className="text-gray-05 block">
                            {" "}
                            de interfaces
                        </label>
                    </h1>
                </div>
                <div className="flex justify-between flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-0">
                    <p className="max-w-[22.1875rem] text-gray-05 font-normal text-text-18">
                        Com o Border-IA, você poderá dar vida às suas ideias em
                        tempo recorde.{" "}
                    </p>
                    <Button>
                        <Image
                            width={24}
                            height={24}
                            src="/assets/icons/figma.svg"
                            alt="Figma logo"
                        />
                        Usar no Figma
                    </Button>
                </div>
            </div>

            <div className="mt-32 relative">
                <div className="overflow-hidden translate-x-7 md:translate-x-0">
                    <Image
                        className="min-w-[663px] h-auto"
                        src="/assets/interface-figma.svg"
                        alt="Figma"
                        width={1216}
                        height={660}
                    />
                </div>
                <CardPlugin />
            </div>
            <div className="block xl:hidden absolute top-0 right-0 bg-gradient-to-b from-[#C082FF] to-[#7967FF] w-44 h-screen blur-[150px] opacity-30"></div>
        </section>
    );
}
