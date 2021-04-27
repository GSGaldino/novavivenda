import React from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Typography } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import Provider from '../Provider';

import styles from './index.module.css';

export default function Depoimentos(props) {
  const [value, setValue] = React.useState(0);

  const onChange = event => console.log(event);

  const SlideItem = ({
    image,
    title,
    service,
    text,
    footer,
    position,
    renderButtons
  }) => {
    return (
      <div className={styles.slideItem}>
        <div className={styles.thumb}>
          <img
            src={image}
            alt={service}
            title={service}
          />
        </div>
        <div className={styles.content}>
          <div>
            <p>{title}</p>
            <h3>{service}</h3>
            <h3>Nova Vivenda</h3>
          </div>
          <div>
            <Typography component="p">
              {text}
            </Typography>
          </div>
          <div className={styles.footer}>
            {footer}
            <div className={styles.position}>
              <h3>{`${position}/4`}</h3>
              <div>{renderButtons}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const slideStyle = {
    textAlign: "center",
  };

  const Buttons = () => (
    <div className={styles.buttons}>
      <ButtonBack>
        <ChevronLeft/>
      </ButtonBack>
      <ButtonNext>
        <ChevronRight />
      </ButtonNext>
    </div>
  )

  return (
    <div className={styles.depoimentos}>
      <Provider>
        <h3>Nossos produtos</h3>

        <div className={styles.carouselContainer}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={800}
            totalSlides={4}
            className={styles.carouselProvider}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              <Slide index={0} style={slideStyle}>
                <SlideItem
                  image="/carrossel/slide1.jpg"
                  title="Para quem quer reformar"
                  service="Casa"
                  text="O pacote Casa Nova Vivenda é a solução completa para realizar o sonho de reformar com segurança, sem dor de cabeça e sem surpresas. É tudo em um só lugar: da aprovação rápida do crédito, mesmo com restrição no nome, passando pelo financiamento em parcelas possíveis para a realidade de cada um e já incluindo todo material e mão de obra, até o tão sonhado dia de entrega."
                  footer={<div><p>Sabe o que parece impossível?</p><p>É o que a gente mais gosta de fazer.</p></div>}
                  position={1}
                  renderButtons={<Buttons />}
                />
              </Slide>
              <Slide index={1} style={slideStyle}>
                <SlideItem
                  image="/carrossel/slide2.jpg"
                  title="Para quem é arquiteto da causa"
                  service="CX"
                  text="A consultoria CX Nova Vivenda fertiliza o terreno para novos negócios. A partir dos aprendizados que tivemos nas quase 3mil reformas que realizamos, oferecemos aos nossos parceiros suporte estratégico, técnico e operacional para a viabilização de seus negócios, com acompanhamento de profissionais qualificados e experientes, e geração contínua de demanda."
                  footer={<div><p>Para nós, a evolução coletiva é o caminho</p><p>para as grandes transformações</p></div>}
                  position={2}
                  renderButtons={<Buttons />}
                />
              </Slide>
              <Slide index={2} style={slideStyle}>
                <SlideItem
                  image="/carrossel/slide3.jpg"
                  title="Para quem abastece de materiais"
                  service="EIXO"
                  text="A Eixo Nova Vivenda é uma facilitadora comercial. 
                  Unimos nossas sólidas relações com as maiores indústrias de insumos para construção do país à nossa compreensão sobre o pequeno varejo nos territórios, para melhorar as ofertas para os clientes e ampliar os resultados."
                  footer={<div><p>Acreditamos que é possível remodelar as relações em redes colaborativas </p><p>que gerem benefícios para todo mundo.</p></div>}
                  position={3}
                  renderButtons={<Buttons />}
                />
              </Slide>
              <Slide index={3} style={slideStyle}>
                <SlideItem
                  image="/carrossel/slide4.jpg"
                  title="Para quem quer avançar"
                  service="Tech"
                  text="A Tech Nova Vivenda coloca nossas tecnologias proprietárias a serviço do mercado da construção civil. Seja para pequenos negócios ou grandes empresas, atuantes no setor público ou no privado, nossas ferramentas exclusivas tornam processos mais eficientes, equipes mais produtivas e elevam a qualidade das entregas."
                  footer={<div><p>Porque não basta inovar, tem que colocar no mundo.</p></div>}
                  position={4}
                  renderButtons={<Buttons />}
                />
              </Slide>
            </Slider>

          </CarouselProvider>
        </div>

      </Provider>
    </div>
  )
}
