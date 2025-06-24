import React from "react";
import styles from "./HeaderControls.module.css";
import { Button } from "../../common/Button/Button";
import { Select } from "../../common/Select/Select";
import { Input } from "../../common/Input/Input";

interface HeaderControlsProps {
    searchTerm: string;
    onSearchTermChange: (value: string) => void;
    onSearch: () => void;
    sortBy: string;
    onSortChange: (value: string) => void;
    language: string;
    onLanguageChange: (value: string) => void;
}

export const HeaderControls: React.FC<HeaderControlsProps> = ({
                                                                  searchTerm,
                                                                  onSearchTermChange,
                                                                  onSearch,
                                                                  sortBy,
                                                                  onSortChange,
                                                                  language,
                                                                  onLanguageChange,
                                                              }) => {
    return (
        <header className={styles.header}>
            <Input
                value={searchTerm}
                onChange={onSearchTermChange}
                placeholder="Пошук новин..."
            />

            <Button onClick={onSearch}>Шукати</Button>

            <Select
                value={sortBy}
                onChange={onSortChange}
                options={[
                    { value: "publishedAt", label: "За датою" },
                    { value: "popularity", label: "За популярністю" },
                    { value: "relevancy", label: "За релевантністю" },
                ]}
            />

            <Select
                value={language}
                onChange={onLanguageChange}
                options={[
                    { value: "en", label: "Англійська" },
                    { value: "uk", label: "Українська" },
                    { value: "de", label: "Німецька" },
                ]}
            />
        </header>
    );
};
