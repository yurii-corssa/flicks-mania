import { styled } from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  line-height: 1.4;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: rgb(168, 218, 220);
  background-color: rgb(48, 88, 144);
  &::placeholder {
    color: rgba(168, 218, 220, 0.5);
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  font-size: 18px;
  line-height: 1.4;
  border-radius: 10px;
  color: #000;
  padding: 0 30px;

  background-color: rgb(168, 218, 220);
`;
