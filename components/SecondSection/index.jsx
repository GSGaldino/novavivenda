import Provider from '../Provider';
import Section from '../Section';

import styles from './index.module.css';

export default function SecondSection() {
  return (
    <div className={styles.secondSection}>
      <Provider>
        <div className={styles.flexSection}>

          <div className={styles.item}>
            <h3 className={styles.primary}>
              <img src="/slug2.png" />
            </h3>
            <h3 className={styles.secondary}>
              A conexão<br></br>transforma.
            </h3>
          </div>

          <div className={styles.item}>
            <img src="/hero.png" alt="Família de 4 pessoas sorrindo" />
          </div>

        </div>
      </Provider>
    </div>
  )
}
