import Image from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

type CardProps = {
    variant: "primary" | "secondary";
    buttonContent: string;
    headingContent: string;
    descContent: string;
    imgSrc: string;
};

function Card({
    variant,
    headingContent,
    descContent,
    imgSrc,
    buttonContent,
}: CardProps) {
    return (
        <div className={`card ${variant === "primary" ? "white" : "blue"}`}>
            <Image src={imgSrc} alt="Card Logo" height={100} width={100} />
            <h3>{headingContent}</h3>
            <p>{descContent}</p>
            {variant === "primary" ? (
                <SecondaryButton>{buttonContent}</SecondaryButton>
            ) : (
                <PrimaryButton>Learn More</PrimaryButton>
            )}
        </div>
    );
}

export default Card;
