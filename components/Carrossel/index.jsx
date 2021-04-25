import React from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Provider from '../Provider';

import styles from './index.module.css';

export default function Depoimentos(props) {
  const [value, setValue] = React.useState(0);

  const onChange = event => console.log(event);

  const slideStyle = {
    textAlign: "center",
  }

  return (
    <div className={styles.depoimentos}>
      <Provider>
        <h3>Nossos produtos</h3>

        <div className={styles.carouselContainer}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={32}
            totalSlides={4}
            className={styles.carouselProvider}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              <Slide index={0} style={slideStyle}><img src="/carrossel/slider1.jpg" /></Slide>
              <Slide index={1} style={slideStyle}><img src="/carrossel/slider2.jpg" /></Slide>
              <Slide index={2} style={slideStyle}><img src="/carrossel/slider3.jpg" /></Slide>
              <Slide index={3} style={slideStyle}><img src="/carrossel/slider4.jpg" /></Slide>
            </Slider>
            <ButtonBack className={`${styles.button} ${styles.prev}`}>
              <ChevronLeft />
            </ButtonBack>
            <ButtonNext className={`${styles.button} ${styles.next}`}>
              <ChevronRight />
            </ButtonNext>
          </CarouselProvider>
        </div>

      </Provider>
    </div>
  )
}
