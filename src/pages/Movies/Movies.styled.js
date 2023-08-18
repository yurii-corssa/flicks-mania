import { styled } from 'styled-components';

export const FindSection = styled.section`
  display: flex;
  flex-direction: column;
  color: #a8dadc;
  background-color: #1d3557;
  padding: 0 100px 100px 100px;
`;

export const Title = styled.h1`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  max-width: 600px;
  color: #fff;
  font-size: 32px;
  letter-spacing: -0.05em;
  line-height: 1.4;
  text-align: left;
`;

export const SearchForm = styled.form`
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

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #e63946;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
