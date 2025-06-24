import React, { useCallback, useEffect, useState } from "react";

import { fetchNews } from "../hooks/useFetchNews";
import { HeaderControls } from "../components/main/HeaderControls/HeaderControls";
import { NewsList } from "../components/main/NewsList/NewsList";
import { NewsArticle } from "../components/types";

import styles from './NewsApp.css';

export const NewsApp: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("tesla");
    const [sortBy, setSortBy] = useState("publishedAt");
    const [language, setLanguage] = useState("en");
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const articles = await fetchNews(searchTerm, sortBy, language);
            setNews(articles);
        } catch {
            setError("Не вдалося отримати новини");
        }
        setLoading(false);
    }, [searchTerm, sortBy, language]);

    useEffect(() => {
        handleSearch();
    }, [handleSearch]);

    return (
        <>
            <HeaderControls
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onSearch={handleSearch}
                sortBy={sortBy}
                onSortChange={setSortBy}
                language={language}
                onLanguageChange={setLanguage}
            />

            {loading && <p className={styles.loader}>Завантаження...</p>}
            {error && <p className={styles.error}>{error}</p>}

            <NewsList articles={news}/>
        </>
    );
};
