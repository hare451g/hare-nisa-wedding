import Flex from '../../styled/Flex';

import heroMorning from '../../assets/hero_morning.jpg';

import { HeroContainer, HeroImage, HeroTitle, HeroSubtitle } from './styled';
import Navbar from './Navbar';

const Hero = () => (
  <Flex align="center" direction="column" justify="center">
    <Navbar />
    <HeroContainer align="center" direction="column">
      <HeroSubtitle>
        5<sup>th</sup> December 2020
      </HeroSubtitle>
      <HeroTitle>Nisa &amp; Hendra's Wedding</HeroTitle>
    </HeroContainer>
    <HeroImage alt="hero" src={heroMorning} />
  </Flex>
);

export default Hero;
