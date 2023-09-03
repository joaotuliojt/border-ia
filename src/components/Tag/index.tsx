interface TagProps {
    label: string;
}

export function Tag({ label }: TagProps) {
    return (
        <div className="items-center justify-center py-2 px-8 bg-gray-10 inline-flex border-gray-09 border-[1px] rounded-[0.25rem]">
            <p className="uppercase bg-clip-text bg-gradient-to-r from-[#C082FF] to-[#7967FF] text-transparent font-bold">
                {label}
            </p>
        </div>
    );
}
