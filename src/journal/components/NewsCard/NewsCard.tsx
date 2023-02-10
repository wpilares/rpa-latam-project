import './newsCard.scss';
// import { type ReactElement } from 'react';

interface Props {
  title: string;
  description: string;
  author: string;
  date: string;
  newsImage: string;
}

export const NewsCard: React.FC<Props> = ({
  title,
  description,
  author,
  date,
  newsImage,
}) => {
  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img src={newsImage} alt="" className="news-card__image" />
      </div>
      <div className="news-card__content">
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__description">{description}</p>
        <div className="news-card__meta">
          <small className="news-card__author">{author}</small>
          <small>
            <time dateTime="2023-02-06T19:42:58Z" className="news-card__date">
              {date}
            </time>
          </small>
        </div>
      </div>
    </div>
  );
};
