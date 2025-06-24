import React from "react";
import { NewsArticle } from "../../types";

import styles from './NewsItem.module.css'

export const NewsItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className={styles.item}>
        {article.urlToImage && (
            <img
                src={article.urlToImage}
                alt={article.title}
                className={styles.image}/>
        )}
        <h3 className="news-title">{article.title}</h3>
        <p className="news-text">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="link-news">
            <button>Читати далі...</button>
        </a>
    </div>
);
