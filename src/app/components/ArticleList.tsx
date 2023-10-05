import { Article } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArticleCard from './ArticleCard';

type ArticleListProps = {
    articles:Article[];
};

const ArticleList = ({articles}:ArticleListProps) => {
  return (
    <div>
        {articles.map((article) => (
        <ArticleCard article={article} key={article.id}/>

        ))};

    </div>
  );
};

export default ArticleList;