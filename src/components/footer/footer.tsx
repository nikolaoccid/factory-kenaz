import styled from '@emotion/styled';
import React from 'react';

import { Featured } from './components/featured-articles/featured';
import { FooterLinks } from './components/footer-links/footer-links';
import { NewsletterDialog } from './components/newsletter-dialog/newsletter-dialog';
import { SocialMediaDialog } from './components/social-media-dialog/social-media-dialog';
import { TagsWidget } from './components/tags-widget/tags-widget';

const Container = styled.div`
  width: 100%;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 70px;
  width: 940px;
`;
const RowContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const Footer = () => {
  return (
    <Container>
      <ContentContainer>
        <RowContent>
          <SocialMediaDialog />
          <NewsletterDialog />
          <TagsWidget
            tags={[
              'news',
              'business',
              'travel',
              'health',
              'fitness',
              'body',
              'sport',
              'life',
              'tech',
              'popular',
              'nasa',
              'president',
              'military',
            ]}
          />
        </RowContent>
        <RowContent>
          <Featured title="Featured" />
          <Featured title="Random posts" />
        </RowContent>
      </ContentContainer>
      <FooterLinks />
    </Container>
  );
};
