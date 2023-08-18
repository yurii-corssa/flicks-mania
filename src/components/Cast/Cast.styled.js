import SimpleSlider from 'components/SimpleSlider';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 100%;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 20px;
  /* height: 300px; */
`;

export const Name = styled.p`
  font-weight: 800;
  color: #1d3557;
`;

export const Character = styled.p`
  color: #1d3557;
`;

export const SimpleSliderStyled = styled(SimpleSlider)`
  &.slick-arrow.slick-prev {
    color: red;
    background-color: red;
  }
`;
