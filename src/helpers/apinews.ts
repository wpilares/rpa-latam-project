import axios from 'axios';

export interface News {
  title: string;
  excerpt: string;
  summary: string;
  author: string;
  published_date: string;
  link: string;
  media: string;
}

export const getNews = async (query: string, page: string): Promise<News[]> => {
  const response = await axios.get('https://api.newscatcherapi.com/v2/search', {
    params: {
      q: query,
      lang: 'en',
      sort_by: 'relevancy',
      page_size: page,
    },
    headers: {
      'x-api-key': '-nqaGI1dl5wS2i8bnx0l5pRFqDWmnFwoAr7cXqM9hcs',
    },
  });
  return response.data.articles;
};
