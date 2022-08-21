import styled from 'styled-components';

export const TableTh = styled.thead`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.l};
  height: 20px;
  background-color: ${p => p.theme.colors.bgTableThead};
`;

export const TableTd = styled.td`
  color: ${p => p.theme.colors.black};
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.primary};
`;
export const BtnDel = styled.button`
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 80%;
  transition: all 300ms linear;
  &:hover,
  &:focus {
    background-color: red;
    color: white;
    border: red;
    transform: scale(0.8);
  }
`;
