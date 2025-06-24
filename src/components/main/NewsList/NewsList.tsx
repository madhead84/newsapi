import React from "react";

import { NewsItem } from "../NewsItem/NewsItem";
import { NewsArticle } from "../../types";

import styles from './NewsList.module.css'

export const NewsList: React.FC<{ articles: NewsArticle[] }> = ({ articles }) => (
    <div className={styles.itemList}>
        {articles.map((article, index) => (
            <NewsItem key={index} article={article}/>
        ))}
    </div>
);
