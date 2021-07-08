import '../styles/globals.css';
import { Header } from '../componentes/Header/Header';
import {Footer} from '../componentes/Footer/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
