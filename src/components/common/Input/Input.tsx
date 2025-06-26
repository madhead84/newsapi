import React from "react";
import styles from "./Input.module.css";

interface InputProps {
    type?: string;
    value: string;
    onChange: (value: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    type = "text",
    value,
    onChange,
    onKeyDown,
    placeholder = "",
    className = "",
}) => {

    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={`${styles.input} ${className}`}
        />
    );
};
