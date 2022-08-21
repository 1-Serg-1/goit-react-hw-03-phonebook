import styled from 'styled-components';

export const ContainerPhonebook = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 0px 0px 18px 12px rgba(217, 210, 217, 0.88);
`;
export const SearchMessage = styled.p`
  padding: 5px;
  color: red;
  font-size: 24px;
`;
