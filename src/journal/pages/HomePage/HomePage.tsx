import { type ReactElement, useEffect, useState } from 'react';
import './homePage.scss';
import { getNews, type News } from '../../../helpers/apinews';

export const HomePage = (): ReactElement => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const articles = await getNews('Bitcoin', '1');
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

  console.log(news);

  return (
    <ul>
      {news.map((article) => (
        <li key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </li>
      ))}
    </ul>
  );
};
