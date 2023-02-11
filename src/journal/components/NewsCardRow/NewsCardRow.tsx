import './newsCardRow.scss';

interface Props {
  title: string;
  author: string;
  date: string;
  newsImage: string;
}

export const NewsCardRow: React.FC<Props> = ({
  title,
  author,
  date,
  newsImage,
}) => {
  return (
    <article className="news-card-row">
      <div className="news-card-row__image-content">
        <img src={newsImage} alt="" className="news-card-row__image" />
      </div>
      <div className="news-card-row__content">
        <h3 className="news-card-row__title">{title}</h3>
        <div className="news-card-row__meta">
          <small className="news-card-row__author">{author}</small>
          <small>
            <time
              dateTime="2023-02-06T19:42:58Z"
              className="news-card-row__date">
              {date}
            </time>
          </small>
        </div>
      </div>
    </article>
  );
};
