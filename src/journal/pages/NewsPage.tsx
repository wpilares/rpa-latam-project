import { type ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components';
import { Footer } from '../components/Footer';
import '../../styles/newsPage.scss';

interface Article {
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
}

export const NewsPage = (): ReactElement => {
  const [article, setArticle] = useState<Article | null>(null);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await axios(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=f8905f1c83fb4c43b8ba8eed4ad83c32'
      );
      setArticle(result.data.articles[0]);
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
      <Header />
      <div className="news-page">
        <h2 className="news-page__header">{article?.title}</h2>
        <p className="news-page__description">{article?.description}</p>
        <img
          className="news-page__image"
          src={article?.urlToImage}
          alt={article?.title}
        />
        <p className="news-page__published-at">
          Published at: {article?.publishedAt}
        </p>
        <p className="news-page__content">{article?.content}</p>
        <p className="news-page__author">Author: {article?.author}</p>
        <a className="news-page__link" href={article?.url}>
          Read more
        </a>
      </div>
      <Footer />
    </div>
  );
};
