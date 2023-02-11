import { type ReactElement } from 'react';
import './homePage.scss';
import { Header } from '../../components';
import { Footer } from '../../components/Footer';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { NewsCardRow } from '../../components/NewsCardRow/NewsCardRow';

export const HomePage = (): ReactElement => {
  const news = [
    {
      img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80',
      title:
        'Elon dodges liability, Ford falters and Rivian lays off more workers',
      description:
        'This week in the Station, a weekly transportation newsletter, Elon Musk dodges liability, Rivian lays off workers and Ford falters',
      author: 'Kirsten snbdubu',
      dateNews: '06-02-2023',
    },
    {
      img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80',
      title:
        'Elon dodges liability, Ford falters and Rivian lays off more workers',
      description:
        'This week in the Station, a weekly transportation newsletter, Elon Musk dodges liability, Rivian lays off workers and Ford falters',
      author: 'Kirsten Korosec',
      dateNews: '06-02-2023',
    },
    {
      img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80',
      title:
        'Elon dodges liability, Ford falters and Rivian lays off more workers',
      description:
        'This week in the Station, a weekly transportation newsletter, Elon Musk dodges liability, Rivian lays off workers and Ford falters',
      author: 'Kirsten Korosec',
      dateNews: '06-02-2023',
    },
    {
      img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80',
      title:
        'Elon dodges liability, Ford falters and Rivian lays off more workers',
      description:
        'This week in the Station, a weekly transportation newsletter, Elon Musk dodges liability, Rivian lays off workers and Ford falters',
      author: 'Kirsten Korosec',
      dateNews: '06-02-2023',
    },
    {
      img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80',
      title:
        'Elon dodges liability, Ford falters and Rivian lays off more workers',
      description:
        'This week in the Station, a weekly transportation newsletter, Elon Musk dodges liability, Rivian lays off workers and Ford falters',
      author: 'Kirsten Korosec',
      dateNews: '06-02-2023',
    },
    {
      img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80',
      title:
        'Elon dodges liability, Ford falters and Rivian lays off more workers',
      description:
        'This week in the Station, a weekly transportation newsletter, Elon Musk dodges liability, Rivian lays off workers and Ford falters',
      author: 'Kirsten Korosec',
      dateNews: '06-02-2023',
    },
  ];

  return (
    <>
      <Header />
      <div className="wrapper">
        <main className="main">
          <article className="hero">
            <div className="hero__content">
              <h3 className="hero__title">
                Elon dodges liability, Ford falters and Rivian lays off more
                workers
              </h3>
              <p className="hero__description">
                This week in the Station, a weekly transportation newsletter,
                Elon Musk dodges liability, Rivian lays off workers and Ford
                falters
              </p>
              <div className="hero__meta">
                <small className="hero__author">Kirsten Korosec</small>
                <small>
                  <time dateTime="2023-02-06T19:42:58Z" className="hero__date">
                    06-02-2023
                  </time>
                </small>
              </div>
            </div>
            <div className="hero__image-container">
              <img
                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80"
                alt=""
                className="hero__image"
              />
            </div>
          </article>
          <section className="section">
            <h2 className="section__title">Business</h2>
            <div className="content-news">
              {news.map((news, idx) => (
                <NewsCard
                  key={idx}
                  newsImage={news.img}
                  title={news.title}
                  description={news.description}
                  date={news.date}
                  author={news.author}
                />
              ))}
            </div>
          </section>
          <section className="section">
            <h2 className="section__title">Business</h2>
            <div className="content-news">
              {news.map((news, idx) => (
                <NewsCard
                  key={idx}
                  newsImage={news.img}
                  title={news.title}
                  description={news.description}
                  date={news.date}
                  author={news.author}
                />
              ))}
            </div>
          </section>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <section className="section">
              <h2 className="section__title">Business</h2>
              <div className="content-news">
                {news.map((news, idx) => (
                  <NewsCardRow
                    key={idx}
                    newsImage={news.img}
                    title={news.title}
                    description={news.description}
                    date={news.date}
                    author={news.author}
                  />
                ))}
              </div>
            </section>
            <section className="section">
              <h2 className="section__title">Business</h2>
              <div className="content-news">
                {news.map((news, idx) => (
                  <NewsCardRow
                    key={idx}
                    newsImage={news.img}
                    title={news.title}
                    description={news.description}
                    date={news.date}
                    author={news.author}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
