import React from 'react';

import { Typography, Button } from '@material-ui/core';
import Provider from '../Provider';
import Section from '../Section';

import styles from './index.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <Provider>

        <Section>

          <div className={styles.item}>
            <div>
              <h3 className={styles.primary}>
                Conexões <br></br>são pontes
              </h3>
              <h3 className={styles.secondary}>
                E pontes servem <br></br> para criar acessos
              </h3>

              <Typography component="p">
                A Nova Vivenda é uma plataforma de conexões geradora de soluções para que todos, sem exceções, tenham acesso a moradias dignas, seguras e confortáveis.
              </Typography>

              <Button
                color="primary"
                variant="contained"
                size="large"
                className={styles.button}
              >
                Saiba mais
              </Button>
            </div>
          </div>

          <div className={styles.item}>

          </div>

        </Section>

      </Provider>
    </main>
  )
}
