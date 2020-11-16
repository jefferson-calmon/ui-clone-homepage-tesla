import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../../hooks/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollProgress } = useWrapperScroll();

  const opacity = useTransform(
    scrollProgress, 
    [0.9, 1],
    [0, 1]
  );

  const pointerEvents = useTransform(
    opacity, 
    value => value > 0 ? 'auto' : 'none'
  );

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity, pointerEvents }}>
        <ul>
          <li>
            <a href="#efu" title="Copyright 2020 Tesla Motors">Tesla © 2020</a>
          </li>
          <li>
            <a href="#efu">Privacy &amp; Legal</a>
          </li>
          <li>
            <a href="#efu">Contact</a>
          </li>
          {/* <li>
            <a href="#efu">Careers</a>
          </li>
          <li>
            <a href="#efu">Get Newsletter</a>
          </li>
          <li>
            <a href="#efu">News</a>
          </li>
          <li>
            <a href="#efu">Forums</a>
          </li>
          <li>
            <a href="#efu">Locations</a> 
          </li> */}
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
