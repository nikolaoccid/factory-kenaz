import styled from '@emotion/styled';

export const Container = styled.div<{ shadowColor: string }>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: #fff;

  border-left-width: 10px;
  border-left-style: solid;
  border-left-color: ${(props) => props.shadowColor};
`;
export const InnerContainer = styled.div`
  padding-left: 31px;
  padding-top: 15px;
  padding-right: 32px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 28px 0;
`;
export const Row = styled.div`
  display: flex;
  gap: 15px;
`;
