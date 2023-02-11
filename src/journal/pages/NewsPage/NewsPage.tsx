import { type ReactElement, useEffect, useState } from 'react';
import './newsPage.scss';
import { getNews, type News } from '../../../helpers/apinews';
import { useParams } from 'react-router-dom';

export const NewsPage = (): ReactElement => {
  const { id } = useParams();
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const articles = await getNews((id ?? '').toString(), '1');
      setNews(articles);
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
      {news.map((article) => (
        <div className="news-page" key={article.title}>
          <h2 className="news-page__header">{article.title}</h2>
          <p className="news-page__description">{article.excerpt}</p>
          <img
            className="news-page__image"
            src={article.media}
            alt={article.title}
          />
          <p className="news-page__published-at">
            Published at: {article.published_date}
          </p>
          <p className="news-page__content">{article.summary}</p>
          <p className="news-page__author">Author: {article.author}</p>
          <a className="news-page__link" href={article.link}>
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};
