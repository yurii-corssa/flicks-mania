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
