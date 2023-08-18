import TrendingList from 'components/TrendingList/TrendingList';
import { Hero, List, SubTitle, Text, Title, TopReleases } from './Home.styled';

const Home = () => {
  return (
    <main>
      <Hero>
        <Title>Movies</Title>
        <Text>
          Welcome to the cinematic universe where your movie quest begins!
          Unleash your inner film buff and embark on a thrilling adventure to
          discover hidden gems and all-time classics.
        </Text>
      </Hero>
      <TopReleases>
        <SubTitle>Today&apos;s Hottest Releases</SubTitle>
        <List>
          <TrendingList />
        </List>
      </TopReleases>
    </main>
  );
};

export default Home;
