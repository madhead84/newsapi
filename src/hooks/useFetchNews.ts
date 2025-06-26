import { NewsArticle } from "../components/types";
import { Language, SortBy } from "../constants/enum";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = process.env.REACT_APP_API_BASE;

export const fetchNews = async (
    query: string,
    sortBy: SortBy,
    language: Language
): Promise<NewsArticle[]> => {
    const response = await fetch(`${API_BASE}?q=${query}&sortBy=${sortBy}&language=${language}&apiKey=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to get news");
    const data = await response.json();
    return data.articles;
};
