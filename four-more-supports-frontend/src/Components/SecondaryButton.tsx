import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

const SecondaryButton: React.FC<PrimaryButtonProps> = ({ children, ...rest }) => {
    return (
        <button className="__Secondary_BUTTON__" {...rest}>
            {children}
        </button>
    );
};

export default SecondaryButton;
