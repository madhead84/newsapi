import React from "react";
import { Button } from "../Button/Button";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
    urlToImage: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    author: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
                                                      urlToImage,
                                                      title,
                                                      description,
                                                      url,
                                                      publishedAt,
                                                      author,
                                                  }) => {
    return (
        <div className={styles.article}>
            <img className={styles.image} src={urlToImage} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{new Date(publishedAt).toLocaleDateString()}</p>
            <p>{author || "Unknown"}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Button/>
            </a>
        </div>
    );
};
