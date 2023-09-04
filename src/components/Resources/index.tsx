import { Tag } from "../Tag";
import Image from "next/image";

const Cards = [
    {
        title: "Removedor de fundo",
        description: "Torne o fundo transparente em qualquer foto.",
        iconPath: "/assets/icons/sparkle-2.svg",
    },
    {
        title: "Gerador de texto",
        description: "Gere textos de espaço reservado para suas interfaces.",
        iconPath: "/assets/icons/textT.svg",
    },
    {
        title: "Amplificador de imagem",
        description: "Amplie imagens e melhore sua resolução.",
        iconPath: "/assets/icons/arrowsOut.svg",
    },
    {
        title: "Gerador de avatar",
        description: "Crie instantaneamente avatares de usuários.",
        iconPath: "/assets/icons/userFocus.svg",
    },
];

export function Resources() {
    return (
        <section className="mt-36">
            <div className="flex justify-center items-center flex-col gap-6">
                <Tag label="Recursos" />
                <h2 className="md:text-heading-h3 text-heading-h5 text-center max-w-[604px] font-medium">
                    Como o Border-IA te{" "}
                    <label className="text-gray-05">ajuda no dia a dia</label>
                </h2>
            </div>
            <div className="flex mt-6 md:mt-20 gap-8 flex-col md:flex-row items-center">
                {Cards.map((card) => (
                    <div
                        className="flex flex-col gap-4 items-center md:items-start"
                        key={card.title}
                    >
                        <div className="bg-gray-10 w-12 h-12 flex items-center justify-center rounded-[4px] border-[1px] border-gray-09">
                            <Image
                                src={card.iconPath}
                                alt=""
                                width={32}
                                height={32}
                            />
                        </div>
                        <h3 className="text-heading-h6 text-gray-02 md:max-w-[180px] md:text-left text-center">
                            {card.title}
                        </h3>
                        <p className="text-text-16 text-gray-06 md:text-left text-center">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
