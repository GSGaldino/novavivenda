import { IconContext } from 'react-icons';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';

import { Link, Typography } from '@material-ui/core';
import Provider from '../Provider';

import styles from './index.module.css';

export default function Footer() {
  const iconStyle = {
    size: 40,
    color: "#454545"
  }

  return (
    <div className={styles.footer}>
      <Provider>
        <div className={styles.flexSection}>
          <div className={styles.item}>
            <img src="/logo-blue.svg" alt="Logo Nova Vivenda" />
          </div>

          <div className={styles.item}>
            <h3>Chama no zap <br></br>se precisar de ajuda</h3>
            <Link
              href="https://api.whatsapp.com/send?phone=551158518889"
              target="_blank"
            >
              <div className={styles.whatsapp}>
                <IconContext.Provider value={iconStyle}>
                  <FaWhatsapp />
                </IconContext.Provider>
                <h3>
                  (11) 5851-8889
                </h3>
              </div>
            </Link>
          </div>

          <div className={styles.item}>
            <h3>Acompanhe nossas <br></br> redes sociais</h3>
            <div className={styles.social}>
              <div>
                <IconContext.Provider value={iconStyle}>
                  <FaFacebook />
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={iconStyle}>
                  <FaInstagram />
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={iconStyle}>
                  <FaYoutube />
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={iconStyle}>
                  <FaLinkedin />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.posFooter}>
          <Typography component="p">
            © Nova Vivenda - todos direitos reservados CNPJ 19.439.278/0001-98
          </Typography>
        </div>
      </Provider>
    </div>
  )
}
