import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 33%;
  text-decoration: none;
`;
export const ArticleDate = styled.div`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;
export const ArticleTitle = styled.div`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #363f48;
`;
