const API_BASE = 'https://newsapi.org/v2/everything/';
const API_KEY = 'apiKey=dc71297702b14b8aa2739c646a6a118b';


export const fetchNews = async (query: string = 'q=tesla', sortBy: string = 'sortBy=published-at', language: string = 'language=en') => {
    const response = await fetch(`${API_BASE}?${query}&${sortBy}&${language}&${API_KEY}`);

    if (!response.ok) {
        throw new Error(`${response.statusText} Could not fetch ${API_BASE}&${query}&${sortBy}&${language}${API_KEY}`);
    }

    const json = await response.json();
    return json;
};
