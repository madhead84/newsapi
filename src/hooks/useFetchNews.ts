import { NewsArticle } from "../components/types";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = process.env.REACT_APP_API_BASE;

export const fetchNews = async (
    query: string,
    sortBy: string,
    language: string
): Promise<NewsArticle[]> => {
    const response = await fetch(`${API_BASE}?q=${query}&sortBy=${sortBy}&language=${language}&apiKey=${API_KEY}`);

    if (!response.ok) {
        throw new Error("Не вдалося завантажити новини");
    }

    const data = await response.json();
    return data.articles;
};
