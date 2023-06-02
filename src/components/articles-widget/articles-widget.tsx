import styled from '@emotion/styled';
import React from 'react';

import { ArticlesNavigation } from './components/articles-navigation/articles-navigation';
import { SideWidgetArticle } from './components/side-widget-article/side-widget-article';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  background-color: rgb(75, 69, 126);
`;
export const ArticlesWidget = () => {
  return (
    <Container>
      <ArticlesNavigation navItems={['Popular', 'Top rated', 'Comments']} />
      <SideWidgetArticle
        title="Palestinians call off peace talks after clash"
        date="August 26, 2013"
        goTo="/article"
        comments={5}
      />
      <SideWidgetArticle
        title="Palestinians call off peace talks after clash"
        date="August 26, 2013"
        goTo="/article"
        comments={5}
      />
      <SideWidgetArticle
        title="Palestinians call off peace talks after clash"
        date="August 26, 2013"
        goTo="/article"
        comments={5}
      />
      <SideWidgetArticle
        title="Palestinians call off peace talks after clash"
        date="August 26, 2013"
        goTo="/article"
        comments={5}
      />
      <SideWidgetArticle
        title="Palestinians call off peace talks after clash"
        date="August 26, 2013"
        goTo="/article"
        comments={5}
      />
    </Container>
  );
};
