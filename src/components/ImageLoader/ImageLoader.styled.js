import ContentLoader from 'react-content-loader';
import { styled } from 'styled-components';

export const ImgLoader = styled(ContentLoader)`
  position: absolute;
  top: 0;
  left: 0;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;
