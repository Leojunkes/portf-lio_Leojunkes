import '../styles/globals.css';
import { Header } from '../componentes/Header/Header';
import {Footer} from '../componentes/Footer/Footer';
import {ChakraProvider} from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={false}>
    
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
