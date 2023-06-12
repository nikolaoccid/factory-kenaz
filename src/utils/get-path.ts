import { useLocation } from 'react-router-dom';

export const getPath = () => {
  const location = useLocation();
  const category = location.state?.category;
  const path = location.pathname.split('/')[1];
  return path !== 'article' ? path : category ?? '';
};
