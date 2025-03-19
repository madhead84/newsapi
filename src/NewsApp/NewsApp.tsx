import React, { useEffect, useState } from "react";

import './NewsApp.css';

const API_BASE = "https://newsapi.org/v2/everything";
const API_KEY = "dc71297702b14b8aa2739c646a6a118b";

interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

const fetchNews = async (query: string, sortBy: string, language: string): Promise<{ articles: NewsArticle[] }> => {
    const response = await fetch(`${API_BASE}?q=${query}&sortBy=${sortBy}&language=${language}&apiKey=${API_KEY}`);

    if (!response.ok) {
        throw new Error("Не вдалося завантажити новини");
    }

    return await response.json();
};

const NewsApp: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("tesla");
    const [sortBy, setSortBy] = useState<string>("publishedAt");
    const [language, setLanguage] = useState<string>("en");
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchNews(searchTerm, sortBy, language);
            setNews(data.articles);
        } catch (err) {
            setError("Не вдалося отримати новини");
        }
        setLoading(false);
    };

    useEffect(() => {
        handleSearch();
    }, [sortBy, language]);

    return (
        <div className="body">
            <header className="header">
                <input
                    type="text"
                    placeholder="Пошук новин..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input"
                />
                <button onClick={handleSearch}
                        className="button-search">
                    Шукати
                </button>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select">
                    <option value="publishedAt">За датою</option>
                    <option value="popularity">За популярністю</option>
                    <option value="relevancy">За релевантністю</option>
                </select>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}
                        className="select">
                    <option value="en">Англійська</option>
                    <option value="uk">Українська</option>
                    <option value="de">Німецька</option>
                </select>
            </header>

            {loading && <p className="loader">Завантаження...</p>}
            {error && <p className="error">{error}</p>}

            <div className="item-list">
                {news.map((article, index) => (
                    <div key={index} className="item">
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title}
                                 className="image"/>
                        )}
                        <h3 className="news-title">{article.title}</h3>
                        <p className="news-text">{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer"
                           className="link-news">
                            <button>Читати далі</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsApp;