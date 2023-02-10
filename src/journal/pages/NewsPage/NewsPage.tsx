import { type ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import './newsPage.scss';

interface Article {
  title: string;
  excerpt: string;
  summary: string;
  author: string;
  published_date: string;
  link: string;
  media: string;
}

export const NewsPage = (): ReactElement => {
  const [article, setArticle] = useState<Article | null>(null);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(
        'https://api.newscatcherapi.com/v2/search',
        {
          params: {
            q: 'Bitcoin',
            lang: 'en',
            sort_by: 'relevancy',
            page: '1',
          },
          headers: {
            'x-api-key': 'pzflooiZkigZv3RHkvyQWg6cm9vbbEjkbqkIU4of_D8',
          },
        },
      );
      setArticle(response.data.articles[0]);
    };
    fetchData()
      .then(() => {
        console.log('Successfully request');
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="news-page">
        <h2 className="news-page__header">{article?.title}</h2>
        <p className="news-page__description">{article?.excerpt}</p>
        <img
          className="news-page__image"
          src={article?.media}
          alt={article?.title}
        />
        <p className="news-page__published-at">
          Published at: {article?.published_date}
        </p>
        <p className="news-page__content">{article?.summary}</p>
        <p className="news-page__author">Author: {article?.author}</p>
        <a className="news-page__link" href={article?.link}>
          Read more
        </a>
      </div>
    </div>
  );
};
