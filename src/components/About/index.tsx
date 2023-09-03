import Image from "next/image";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { CardPlugin } from "../CardPlugin";

export function About() {
    return (
        <section className="mt-20">
            <div className="flex-col gap-6 inline-flex">
                <div>
                    <Tag label="Figma Plugin" />
                </div>
                <div>
                    <h1 className="text-gray-01 font-medium text-heading-h1">
                        Acelere sua criação
                        <label className="text-gray-05 block">
                            {" "}
                            de interfaces
                        </label>
                    </h1>
                </div>
                <div className="flex justify-between">
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
                <Image
                    src="/assets/interface-figma.svg"
                    alt="Figma"
                    width={1216}
                    height={660}
                />
                <CardPlugin />
            </div>
        </section>
    );
}
