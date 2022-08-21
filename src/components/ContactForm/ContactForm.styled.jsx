import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
export const Input = styled(Field)`
  border-radius: 10px;
  outline-color: blue;
  width: 300px;
  padding: 10px;
`;
export const ErrorText = styled.p`
  color: red;
  width: 300px;
  text-align: justify;
`;
export const BtnAdd = styled.button`
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  width: 300px;
  transition: all 200ms linear;
  &:hover,
  &:focus {
    background-color: green;
    color: white;  
`;
