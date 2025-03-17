import React, { useEffect, useState } from "react";
import { fetchNews } from "../../services/NewsApiService";
import { NewsCard } from "../NewsCard/NewsCard";

export const NewsList: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            try {
                const data = await fetchNews();
                setArticles(data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {articles.map((article, index) => (
                <NewsCard key={index} {...article} />
            ))}
        </div>
    );
};
