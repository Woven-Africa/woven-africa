"use client";

import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface CustomButtonProps {
    text?: string;
    bgColor?: string;
    textColor?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    onClick?: () => void;
    border?: string;
    href?: string;
    icon?: IconType;
    iconPosition?: "left" | "right";
    iconClassName?: string;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                       text = "Click Me",
                                                       bgColor = "bg-ashesi-red",
                                                       textColor = "text-white",
                                                       width = "w-40",
                                                       height = "h-12",
                                                       borderRadius = "rounded-md",
                                                       onClick,
                                                       border = "",
                                                       href,
                                                       icon: Icon,
                                                       iconPosition = "left",
                                                       iconClassName = "text-xl text-white",
                                                       className = "",
                                                   }) => {
    const buttonClass = `
    ${bgColor} ${textColor} ${width} ${height} ${borderRadius} ${border}
    flex justify-center items-center gap-2 px-4 py-2 font-semibold
    transition duration-300 ease-in-out hover:opacity-80 active:scale-95
    ${className}`;

    const ButtonContent = (
        <>
            {Icon && iconPosition === "left" && <Icon className={iconClassName} />}
            <span>{text}</span>
            {Icon && iconPosition === "right" && <Icon className={iconClassName} />}
        </>
    );

    return href ? (
        <Link href={href} className={buttonClass}>
            {ButtonContent}
        </Link>
    ) : (
        <button className={buttonClass} onClick={onClick}>
            {ButtonContent}
        </button>
    );
};

export default CustomButton;