import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, type = "button", className = "" }) => {

    return (
        <button type={type} onClick={onClick} className={`${styles.button} ${className}`}>
            {children}
        </button>
    );
};
