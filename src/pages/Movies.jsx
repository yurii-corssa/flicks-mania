import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <main>
      <h1>Movies</h1>
      <Searchbar onSubmit={onSubmit} />
    </main>
  );
};

export default Movies;
