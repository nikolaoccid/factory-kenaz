import styled from '@emotion/styled';
import { chunk } from 'lodash';
import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  padding-top: 10px;
`;
const Title = styled.p`
  font-family: 'Bitter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #cccccc;
`;
const TagsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const TagRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const Tag = styled.div<{ isActive?: boolean }>`
  background-color: ${(props) => (props.isActive ? '#4d4382' : '#333333')};
  padding: 3px 9px;

  text-decoration: none;
  cursor: pointer;
  font-family: 'Varela', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => (props.isActive ? '#cccccc' : '#666666')};
`;

export const TagsWidget = ({ tags }: { tags: string[] }) => {
  const handleClick = (tag: string) => {
    let activeTagsCopy = [...activeTags];
    if (activeTags.includes(tag)) {
      activeTagsCopy = activeTagsCopy.filter((activeTag) => activeTag != tag);
      return setActiveTags(activeTagsCopy);
    }
    setActiveTags([...activeTags, tag]);
  };
  const groupedTags = chunk(tags, 4);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  return (
    <Container>
      <Title>Tags Widget</Title>
      <TagsGroup>
        {groupedTags.map((group) => (
          <TagRow key={group[0]}>
            {group.map((tag) => (
              <Tag isActive={activeTags.includes(tag)} key={tag} onClick={() => handleClick(tag)}>
                {tag}
              </Tag>
            ))}
          </TagRow>
        ))}
      </TagsGroup>
    </Container>
  );
};
