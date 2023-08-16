import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM1MGM0MTU3NGU3ZjU1MTk1MzAwZGY3MDI3NmU5YSIsInN1YiI6IjY0ZGNhZmUwYjc3ZDRiMTE0MDE5MDI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.buWnv8_WQ7RAZysPNmdWAinzf7Gie3uZSaU1x0l5eDE';

export const fetchAPI = async url => {
  const options = {
    params: {},
    headers: {
      accept: 'application/json',
      Authorization: KEY,
    },
  };

  try {
    const responce = await axios.get(`${BASE_URL}${url}`, options);
    const data = responce.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// fetchAPI('/trending/movie/day');

// '/trending/movie/day'
