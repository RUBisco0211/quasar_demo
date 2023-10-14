import { getAxiosInstance } from 'src/boot/axios';
import { NewsParams } from 'src/model/service/newsModels';

const newsAxiosInstance = getAxiosInstance(process.env.newsApi!);

export const newsService = {
  getNews: (params: NewsParams) =>
    newsAxiosInstance.get('/api/dm-it', { params }),
};
