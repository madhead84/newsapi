import React from 'react';

import styles from './Button.module.css';

// @ts-ignore
export const Button: React.FC = ({ url }) => {
    return (
        <div className={styles.button} onClick={() => window.open(url, '_blank')}>
            Read more
        </div>
    );
}

interface Props {
    title?: string;
    clazzName?: string;
}

export const Title: React.FC<Props> = ({ title, clazzName }) => {
    title = 'some title';
    clazzName = 'someClass';
    return (
        <div className={clazzName}>{title}</div>
    )
};
