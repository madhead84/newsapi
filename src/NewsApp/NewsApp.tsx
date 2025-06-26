import React, { useCallback, useEffect, useState } from "react";

import { fetchNews } from "../hooks/useFetchNews";
import { HeaderControls } from "../components/main/HeaderControls/HeaderControls";
import { NewsList } from "../components/main/NewsList/NewsList";
import { NewsArticle } from "../components/types";
import { Language, SortBy } from "../constants/enum";

import styles from './NewsApp.module.css';

export const NewsApp: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState<SortBy>(SortBy.PublishedAt);
    const [language, setLanguage] = useState<Language>(Language.English);
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = useCallback(async (term: string) => {
        if (!term.trim()) return;
        setLoading(true);
        setError(null);
        try {
            const articles = await fetchNews(term, sortBy, language);
            setNews(articles);
        } catch {
            setError("Failed to get news");
        }
        setLoading(false);
    }, [sortBy, language]);

    useEffect(() => {
        if (searchTerm.trim()) {
            handleSearch(searchTerm);
        }
    }, [handleSearch]);

    return (
        <div className={styles.wrapper}>
            <HeaderControls
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onSearch={() => handleSearch(searchTerm)}
                sortBy={sortBy}
                onSortChange={setSortBy}
                language={language}
                onLanguageChange={setLanguage}
            />

            {loading && <p className={styles.loader}>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}

            <NewsList articles={news}/>
        </div>
    );
};
