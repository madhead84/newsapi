import React from "react";
import styles from "./Select.module.css";

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    className?: string;
}

export const Select: React.FC<SelectProps> = ({ value, onChange, options, className = "" }) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${styles.select} ${className}`}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
