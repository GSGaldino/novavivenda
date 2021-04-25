import { Link, Typography } from '@material-ui/core';
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

            <Link 
              href="https://api.whatsapp.com/send?phone=551158518889" 
              target="_blank"
            >
              <div className={styles.whatsapp}>
                <img src="/whatsapp.svg" alt="Ícone whatsapp" />
                <Typography component="p">
                  (11) 5851-8889
                </Typography>
              </div>
            </Link>
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
