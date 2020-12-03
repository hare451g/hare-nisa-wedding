import Flex from '../../styled/Flex';

import heroMorning from '../../assets/hero_morning.jpg';
import brideSrc from '../../assets/bride.jpg';
import bride2Src from '../../assets/bride_2.jpg';

import {
  HeroContainer,
  HeroImage,
  HeroTitle,
  HeroSubtitle,
  Title,
  BrideSection,
  BrideName,
  BrideParentsName,
  BridePhoto,
  BigAmperstand,
} from './styled';
import Navbar from './Navbar';

const Hero = () => (
  <>
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
    <BrideSection>
      <Title>The Bride</Title>
      <BridePhoto alt="another couple" src={bride2Src} />
      <div>
        <BrideName>Annisa Bayyina Azis</BrideName>
        <BrideParentsName>Bapak Ichwan &amp; Ibu Yayah</BrideParentsName>
      </div>
      <BigAmperstand>&amp;</BigAmperstand>
      <div>
        <BrideName>Hendra Sadewa</BrideName>
        <BrideParentsName>
          Alm. Bapak Samedi Santoso &amp; Ibu Hendrawati
        </BrideParentsName>
      </div>
      <BridePhoto alt="couple" src={brideSrc} />
    </BrideSection>
  </>
);

export default Hero;
