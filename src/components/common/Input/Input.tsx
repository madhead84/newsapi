import React from "react";
import styles from "./Input.module.css";

interface InputProps {
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export const Input: React.FC<InputProps> = ({
                                                type = "text",
                                                value,
                                                onChange,
                                                placeholder = "",
                                                className = "",
                                            }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`${styles.input} ${className}`}
        />
    );
};
