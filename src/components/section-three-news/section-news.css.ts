import styled from '@emotion/styled';

export const Container = styled.div<{ shadowColor: string }>`
  display: flex;
  flex-direction: column;
  max-width: 610px;
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
  max-height: 35px;
  justify-content: space-between;
  align-items: center;
  max-width: 550px;
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
