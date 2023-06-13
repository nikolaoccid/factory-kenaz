import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  justify-content: center;
  align-items: center;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  width: 940px;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(237, 237, 237);
  width: 65%;
  gap: 17px;
`;
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 318px;
  gap: 25px;
`;
export const RowContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
`;
