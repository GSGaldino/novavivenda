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
                Conexões <br></br>são pontes.
              </h3>
              <h3 className={styles.secondary}>
                E pontes <br/>servem para criar acessos.
              </h3>

              <Typography component="p">
                A Nova Vivenda é uma <strong>plataforma de conexões geradora de soluções</strong> para que todos, sem exceções, tenham acesso a moradias dignas, seguras e confortáveis.
              </Typography>

            </div>
          </div>

          <div className={styles.item}>
          </div>

        </Section>

      </Provider>
    </main>
  )
}
