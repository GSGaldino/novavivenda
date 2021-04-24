import Head from 'next/head';

import Main from '../components/Main';
import SecondSection from '../components/SecondSection';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nova vivenda | A conexão transforma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <SecondSection />
      <Contato />
      <Footer />
      
    </div>
  )
}
