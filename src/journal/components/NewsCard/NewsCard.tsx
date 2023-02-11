import './newsCard.scss';
// import { type ReactElement } from 'react';

interface Props {
  title: string;
  author: string;
  date: string;
  newsImage: string;
}

export const NewsCard: React.FC<Props> = ({
  title,
  author,
  date,
  newsImage,
}) => {
  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img src={newsImage} alt="" className="news-card__image" />
      </div>
      <div className="news-card__content">
        <h3 className="news-card__title">{title}</h3>
        <div className="news-card__meta">
          <small className="news-card__author">{author}</small>
          <small>
            <time dateTime="2023-02-06T19:42:58Z" className="news-card__date">
              {date}
            </time>
          </small>
        </div>
      </div>
    </article>
  );
};
