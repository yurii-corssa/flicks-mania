import { styled } from 'styled-components';

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #a8dadc;
  background-color: #1d3557;
  padding: 0px 100px 100px 100px;
`;

export const Title = styled.h1`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 200px;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  max-width: 800px;
  color: #a8dadc;
  font-size: 20px;
  line-height: 1.4;
  text-align: center;
`;

export const TopReleases = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #e63946;
`;

export const SubTitle = styled.h2`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 100px;
`;
