import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <title>
          SSR
        </title>
      </Head>
      
      <Layout></Layout>
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
