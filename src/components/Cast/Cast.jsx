import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from 'services/api';
// import SimpleSlider from 'components/SimpleSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Avatar,
  CardWrapper,
  Character,
  Name,
  SimpleSliderStyled,
  TextWrapper,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchAPI(`/movie/${movieId}/credits`)
      .then(response => setCast(response.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  const defaultAvatar =
    'https://via.placeholder.com/100x150.png?text=Avatar+Not+Available';
  return (
    <SimpleSliderStyled>
      {cast.map(({ profile_path, name, character, id }) => (
        <div key={id}>
          <CardWrapper>
            <Avatar
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultAvatar
              }
              width={100}
              alt="avatar"
            />
            <TextWrapper>
              <Name>{name}</Name>
              <Character>Character: {character}</Character>
            </TextWrapper>
          </CardWrapper>
        </div>
      ))}
    </SimpleSliderStyled>
  );
};

export default Cast;
