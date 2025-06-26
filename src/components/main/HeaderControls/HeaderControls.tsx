import React from "react";
import styles from "./HeaderControls.module.css";
import { Button } from "../../common/Button/Button";
import { Select } from "../../common/Select/Select";
import { Input } from "../../common/Input/Input";
import { Language, SortBy } from "../../../constants/enum";

interface HeaderControlsProps {
    searchTerm: string;
    onSearchTermChange: (value: string) => void;
    onSearch: () => void;
    sortBy: SortBy;
    onSortChange: (value: SortBy) => void;
    language: Language;
    onLanguageChange: (value: Language) => void;
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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchTerm.trim()) {
            onSearch();
        }
    };

    return (
        <header className={styles.header}>
            <Input
                value={searchTerm}
                onChange={onSearchTermChange}
                onKeyDown={handleKeyDown}
                placeholder="Пошук новин..."
            />

            <Button onClick={onSearch}>Шукати</Button>

            <Select
                value={sortBy}
                onChange={(val) => onSortChange(val as SortBy)}
                options={[
                    { value: SortBy.PublishedAt, label: "Published at" },
                    { value: SortBy.Popularity, label: "Popularity" },
                    { value: SortBy.Relevancy, label: "Relevancy" },
                ]}
            />

            <Select
                value={language}
                onChange={(val) => onLanguageChange(val as Language)}
                options={[
                    { value: Language.English, label: "English" },
                    { value: Language.Ukrainian, label: "Українська" },
                    { value: Language.German, label: "Deutsch" },
                ]}
            />
        </header>
    );
};
