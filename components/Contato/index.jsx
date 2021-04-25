import Popup from '../Popup';
import Provider from '../Provider';

import styles from './index.module.css';

export default function Contato() {
  return (
    <div className={styles.contato} id="contato">
      <Provider>
        <h3>Contato</h3>
        <div className={styles.flexSection}>
          <div className={styles.item}>
            <div className={styles.form}>
              <Popup />
            </div>
          </div>
          <div className={styles.item}>
            <img src="/engineer.jpg" alt="Engenheiro sorrindo" />
          </div>
        </div>
      </Provider>
    </div>
  )
}
