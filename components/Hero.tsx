import React from 'react';
import styled from 'styled-components';

import netlix2 from '../assets/image/spiderman.jpeg';

const HeroContainer = styled.div`
  height: 80vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8)
    ),
    url(${netlix2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;





const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 3.2rem;
  max-width: 60%;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title>Featured Movie</Title>
      <Description>
        Spider Man -No way Home.
      </Description>
    </HeroContainer>
  );
};

export default Hero;
