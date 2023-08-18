import Slider from 'react-slick';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon
      className={className}
      style={{ ...style, display: 'block', color: '#1d3557' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosRoundedIcon
      className={className}
      style={{ ...style, display: 'block', color: '#1d3557' }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
}
