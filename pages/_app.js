import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta description="Nicolas Diot, développeur front React et intégrateur situé à Troyes et à Paris.
          Je créer des sites vitrines, e-commerces et je m'occupe de la maintenance de vos sites internets." />
          <meta name="robots" content="index, follow" />
          <link href="URL" rel="canonical" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
