import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const CardWrapper = styled.li`
  width: calc((100% - 40px) / 2);
  height: 300px;
  overflow: hidden;

  & a {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

// export const Poster = styled.img`
//   width: 200px;
//   height: 100%;
//   object-fit: cover;
// `;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 300px;
`;

export const TitleCard = styled.h3`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.025em;
  line-height: 1.5;
`;

export const TextCard = styled.p`
  max-height: 240px;
  color: #ffffff;
  line-height: 1.5;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;
