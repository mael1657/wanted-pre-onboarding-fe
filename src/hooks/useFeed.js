import { URL } from '../api/API';
import { useQuery } from 'react-query';

const fetchFeedList = async () => {
  const {data} = await URL.get('/data.json');
  return data
}

export const useFeed = () => {
  return useQuery(['feed'], () => fetchFeedList())
}