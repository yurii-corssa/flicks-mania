import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const MovieDetailsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #e63946;
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  top: 50px;
  left: 100px;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 40px;
  text-transform: uppercase;
  color: #fff;
  padding: 10px 10px 10px 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 50px;
  color: #fff;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 300px;
`;

export const Title = styled.h1`
  font-family: 'Wix Madefor Display', sans-serif;
  color: #1d3557;
  font-size: 62px;
  line-height: 1.2;
`;

export const SubTitle = styled.h2`
  font-size: 32px;
  letter-spacing: -0.05em;
  line-height: 1.3;
`;

export const Text = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  line-height: 1.4;
  margin-bottom: 20px;
`;

export const InfoSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f1faee;
`;

export const TitleInfo = styled.h2`
  font-family: 'Wix Madefor Display', sans-serif;
  color: #1d3557;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 50px;
`;

export const BtnInfoList = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const BtnInfoListItem = styled.li`
  display: flex;
  align-items: center;
  padding-right: 100px;
  height: 40px;

  &:not(:first-child) {
    position: relative;
    padding-left: 100px;

    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      content: '|';
      font-weight: 600;
      color: #1d3557;
    }
  }
`;

export const BtnInfo = styled(NavLink)`
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  color: #1d3557;

  &.active {
    color: #e63946;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 50px;
`;
