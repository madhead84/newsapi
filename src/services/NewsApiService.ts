const API_BASE = 'https://newsapi.org/v2/';


const fetchNews = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`${response.statusText} Could not fetch ${url}`);
    }

    const json = await response.json();
    return json;
};

fetchNews('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=dc71297702b14b8aa2739c646a6a118b')
    .then((response) => {
        console.log('response', response);
    })
    .catch((error) => {
        console.log('Could not fetch', error);
    });

/*
fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-01-24&sortBy=publishedAt&apiKey=dc71297702b14b8aa2739c646a6a118b')
    .then(response => response.json())
    .then((json) => {
        console.log(json);
    });

fetch('https://newsapi.org/v2/everything?q=tesla&sortby=published-at&language=en&apiKey=241320bb4ba14d01b463cbf728dde5a0')
    .then(response => response.json())
    .then((json) => {
        console.log(json);
    });

fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-01-24&sortBy=publishedAt&language=de&apiKey=dc71297702b14b8aa2739c646a6a118b')
    .then(response => response.json())
    .then((json) => {
        console.log(json);
    });
*/

export {}