"use client";
import { tv } from "tailwind-variants";
import { ButtonHTMLAttributes } from "react";

const button = tv({
    base: "text-heading-h9 uppercase font-bold text-white rounded-[0.25rem] flex items-center justify-center hover:brightness-125 transition-all text-sm gap-2",
    variants: {
        variant: {
            secondary: "bg-gray-09 py-3 px-6 border-gray-08 border-[1px]",
            primary: "bg-gradient-to-r from-gradient-1 to-gradient-2 py-4 px-8",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof button.variants.variant;
}
export function Button({ variant, className, children, ...rest }: ButtonProps) {
    return (
        <button className={button({ variant, className })} {...rest}>
            {children}
        </button>
    );
}
