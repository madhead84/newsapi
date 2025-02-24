import React from 'react';

export const Button: React.FC = () => {
    return (
        <div className='Button'>
            Button
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
