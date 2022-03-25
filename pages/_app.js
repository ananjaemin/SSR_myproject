import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps },{token}) {
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



export function getServerSideProps({req,res}) {
  console.log(req.cookies)
  return {props: { token: req.cookies.token || ""}};
}
  

export default MyApp
