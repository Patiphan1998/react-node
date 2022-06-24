import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'img/maxresdefault.jpg',
    header: 'Slide 1 Header',
    key: '1',
  },
  {
    src: 'img/News-Toyota-Drive-Economy-02.jpg',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'img/โปรเฮง-รับปีใหม่.jpg',
    header: 'Slide 3 Header',
    key: '3',
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;