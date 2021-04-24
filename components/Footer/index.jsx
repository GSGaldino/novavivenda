import { Typography } from '@material-ui/core';
import Provider from '../Provider';

import styles from './index.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Provider>
        <div className={styles.flexSection}>
          <div className={styles.item}>
            <img src="/logo-blue.svg" alt="Logo Nova Vivenda" />
          </div>

          <div className={styles.item}>
            <Typography component="p">Siga nossas redes sociais</Typography>
            <div className={styles.social}>
              <div>
                <img src="/face.svg" alt="Ícone facebook" />
              </div>
              <div>
                <img src="/insta.svg" alt="Ícone instagram" />
              </div>
              <div>
                <img src="/linkedin.svg" alt="Ícone linkedin" />
              </div>
              <div>
                <img src="/youtube.svg" alt="Ícone facebook" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.posFooter}>
          <Typography component="p">
            © Nova Vivenda - todos direitos reservados
          </Typography>
        </div>
      </Provider>
    </div>
  )
}
