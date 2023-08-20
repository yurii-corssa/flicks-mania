import { ImageLoader } from 'components/ImageLoader/ImageLoader';
import { useState } from 'react';
import { PosterImg, PosterWrapper } from './Poster.styled';

const Poster = ({ image, width, height }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const defaultImg =
    'https://via.placeholder.com/200x300.png?text=Poster+Not+Available';

  const onImageLoading = () => setIsImageLoaded(true);

  return (
    <PosterWrapper>
      {!isImageLoaded && <ImageLoader width={width} height={height} />}
      <PosterImg
        loading="lazy"
        src={image ? `https://image.tmdb.org/t/p/w500/${image}` : defaultImg}
        width={width}
        height={height}
        alt="poster"
        onLoad={onImageLoading}
      />
    </PosterWrapper>
  );
};

export default Poster;
