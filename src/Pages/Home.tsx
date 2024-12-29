import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Row from '../components/Row';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Row title="Trending Now" fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=4e31ecca651df45c65cb851e79a07afc" />
      <Row title="Top Rated" fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=4e31ecca651df45c65cb851e79a07afc" />
    </>
  );
};

export default Home;
