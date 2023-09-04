export function Menu() {
    return (
        <button
            type="button"
            title="Menu"
            className="relative w-8 h-6 block md:hidden"
        >
            <div className="w-full h-[2px] rounded-3xl bg-white absolute left-0 top-0" />
            <div className="w-full h-[2px] rounded-3xl bg-white top-1/2 left-0" />
            <div className="w-3/5 h-[2px] rounded-3xl absolute bottom-0 bg-white right-0" />
        </button>
    );
}
