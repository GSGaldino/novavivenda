import Provider from '../Provider';
import Section from '../Section';

import styles from './index.module.css';

export default function SecondSection() {
  return (
    <div className={styles.secondSection}>
      <Provider>
        <Section>

          <div className={styles.item}>
            <h3 className={styles.primary}>
              Nova <br></br>vivenda
              </h3>
            <h3 className={styles.secondary}>
              A conexão<br></br>transforma
            </h3>
          </div>

          <div className={styles.item}>
            <img src="/right-pic.png" alt="Família de 4 pessoas sorrindo"/>
          </div>

        </Section>
      </Provider>
    </div>
  )
}
