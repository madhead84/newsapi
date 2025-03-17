import React from 'react';
import { fetchNews } from '../../services/NewsApiService'
import { Button } from '../Button/Button';

import styles from './NewsCard.module.css';


export const NewsCard: React.FC = ({
                                       urlToImage,
                                       title,
                                       description,
                                       url,
                                       publishedAt,
                                       author
                                   }: any) => {

    fetchNews()

    return (
        <div className={styles.article}>
            <img className={styles.image}
                 src={urlToImage}
                 alt='Musk is dik'/>
            <h2>title</h2>
            <div>description</div>
            <div>publishedAt</div>
            <div>author</div>
            <Button/>
        </div>
    );
};
