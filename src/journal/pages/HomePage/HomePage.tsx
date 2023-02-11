import { type ReactElement, useEffect, useState } from 'react';
import './homePage.scss';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { NewsCardRow } from '../../components/NewsCardRow/NewsCardRow';
import { getNews, type News } from '../../../helpers/apinews';
import { Link } from 'react-router-dom';

const fetchNews = async (
  setNews: (news: News[]) => void,
  query: string,
  page: string,
): Promise<void> => {
  const articles = await getNews(query, page);
  setNews(articles);
};

export const HomePage = (): ReactElement => {
  const [bitcoinNews, setBitcoinNews] = useState<News[]>([]);
  const [entertainmentNews, setEntertainmentNews] = useState<News[]>([]);
  const [sportsNews, setSportsNews] = useState<News[]>([]);
  const [technologyNews, setTechnologyNews] = useState<News[]>([]);
  const [healthNews, setHealthNews] = useState<News[]>([]);

  useEffect(() => {
    fetchNews(setBitcoinNews, 'Bitcoin', '1')
      .then(() => {
        console.log('Successfully fetched Bitcoin news');
        setTimeout(() => {
          fetchNews(setEntertainmentNews, 'entertainment', '3')
            .then(() => {
              console.log('Successfully fetched Entertainment news');

              setTimeout(() => {
                fetchNews(setSportsNews, 'sport', '6')
                  .then(() => {
                    console.log('Successfully fetched Sports news');

                    setTimeout(() => {
                      fetchNews(setTechnologyNews, 'tech', '6')
                        .then(() => {
                          console.log('Successfully fetched Technology news');

                          setTimeout(() => {
                            fetchNews(setHealthNews, 'health', '6')
                              .then(() => {
                                console.log('Successfully fetched Health news');
                              })
                              .catch((error) => {
                                console.error(error);
                              });
                          }, 1000);
                        })
                        .catch((error) => {
                          console.error(error);
                        });
                    }, 1000);
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }, 1000);
            })
            .catch((error) => {
              console.error(error);
            });
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <main className="main">
          {bitcoinNews.map((news) => (
            <Link
              to={`/news/${news.title}`}
              key={news._id}
              style={{ textDecoration: 'none' }}>
              <article className="hero" key={news.title}>
                <div className="hero__content">
                  <h3 className="hero__title">{news.title}</h3>
                  <p className="hero__description">{news.excerpt}</p>
                  <div className="hero__meta">
                    <small className="hero__author">{news.author}</small>
                    <small>
                      <time className="hero__date">{news.published_date}</time>
                    </small>
                  </div>
                </div>
                <div className="hero__image-container">
                  <img
                    src={news.media}
                    alt={news.title}
                    className="hero__image"
                  />
                </div>
              </article>
            </Link>
          ))}
          <section className="section">
            <h2 className="section__title">Entertainment</h2>
            <div className="content-news">
              {entertainmentNews.map((news) => (
                <Link
                  to={`/news/${news.title}`}
                  key={news._id}
                  style={{ textDecoration: 'none' }}>
                  <NewsCard
                    key={news.title}
                    newsImage={news.media}
                    title={news.title}
                    date={news.published_date}
                    author={news.author}
                  />
                </Link>
              ))}
            </div>
          </section>
          <section className="section">
            <h2 className="section__title">Sports</h2>
            <div className="content-news">
              {sportsNews.map((news) => (
                <Link
                  to={`/news/${news.title}`}
                  key={news._id}
                  style={{ textDecoration: 'none' }}>
                  <NewsCard
                    key={news.title}
                    newsImage={news.media}
                    title={news.title}
                    date={news.published_date}
                    author={news.author}
                  />
                </Link>
              ))}
            </div>
          </section>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <section className="section">
              <h2 className="section__title">Technology</h2>
              <div className="content-news">
                {technologyNews.map((news) => (
                  <Link
                    to={`/news/${news.title}`}
                    key={news._id}
                    style={{ textDecoration: 'none' }}>
                    <NewsCardRow
                      key={news.title}
                      newsImage={news.media}
                      title={news.title}
                      date={news.published_date}
                      author={news.author}
                    />
                  </Link>
                ))}
              </div>
            </section>
            <section className="section">
              <h2 className="section__title">Health</h2>
              <div className="content-news">
                {healthNews.map((news) => (
                  <Link
                    to={`/news/${news.title}`}
                    key={news._id}
                    style={{ textDecoration: 'none' }}>
                    <NewsCardRow
                      key={news.title}
                      newsImage={news.media}
                      title={news.title}
                      date={news.published_date}
                      author={news.author}
                    />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
