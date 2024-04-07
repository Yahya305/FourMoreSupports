import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, ...rest }) => {
    return (
        <button className="__Primary_BUTTON__" {...rest}>
            {children}
        </button>
    );
};

export default PrimaryButton;
