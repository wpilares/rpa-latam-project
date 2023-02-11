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
  try {
    const response = await axios.get(
      'https://api.newscatcherapi.com/v2/search',
      {
        params: {
          q: query,
          lang: 'en',
          sort_by: 'relevancy',
          page_size: page,
        },
        headers: {
          'x-api-key': 'pzflooiZkigZv3RHkvyQWg6cm9vbbEjkbqkIU4of_D8',
        },
      },
    );
    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};
