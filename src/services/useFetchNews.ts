const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = process.env.REACT_APP_API_BASE;

interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

export const fetchNews = async (query: string, sortBy: string, language: string): Promise<{
    articles: NewsArticle[]
}> => {
    const response = await fetch(`${API_BASE}?q=${query}&sortBy=${sortBy}&language=${language}&apiKey=${API_KEY}`);

    if (!response.ok) {
        throw new Error("Не вдалося завантажити новини");
    }

    return await response.json();

};

