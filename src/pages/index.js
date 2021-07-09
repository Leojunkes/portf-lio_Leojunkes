import styles from '../styles/Home.module.css';
import {FaRegHandPointRight, FaRegHandPointLeft} from 'react-icons/fa';
import { ProjetosMais } from './ProjetosMais';
import { Button } from '@chakra-ui/react';

export default function Home() {
  
  return (
    <div className={styles.containerGeral}>
      <div className={styles.container1Leo}>
        <img src="/imagens/leoFoto.png" alt="" />
        <h3>Leonardo Junkes</h3>
        <section>
          <label>
            Estudante de programação(React-js, React-native, Next-js)
          </label>
          <label htmlFor="">motorista de App.</label>
        </section>
        <Button _hover border="0" size='sm' type="button">Contato</Button>
      </div>

      <div id="projetos" className={styles.containerGeralProjetosLeo}>
        <h3>PROJETOS</h3>
        <div  className={styles.containerProjLeo}>
          <div className={styles.imgSiteMeProjetosContainer}>
            <img src="/imagens/projetoSiteME.png" alt="" />
            <label htmlFor="">
              Site criado por mim, para Melissa, Doces de mel doceria.Projeto
              feito em React-js com Next-js, deploy na Vercel.
            </label>
            <Button _hover style={{marginTop:5}}>Ver Projeto</Button>
          </div>
          <div className={styles.imgNihongoProjetosContainer}>
            <img src="/imagens/projetoNihongo.png" alt="" />
            <label htmlFor="">
              Quizz de memorização de caracteres japonês,escolha entre alfabeto
              Hiragana ou Katakana, criado em React-native.
            </label>
            <Button _hover style={{marginTop:5}}>Em breve na playstore</Button>
          </div>
          
        </div>

      </div>

      <div styles={{margiLeft:10}} id="sobreMim" className={styles.containerSobreMim}>
        <h3>SOBRE MIM</h3>
        <div className={styles.containerSection}>
          <section htmlFor="">
            Olá sou Leonardo Junkes,e studo e desenvolvo fazem mais de 2
            anos(HTML, CSS, React-js, React-Native, Next-js...) Adoro esse mundo
            do desenvolvimento, e quando posso adoro jogar games, estou a cada
            dia mais motivado para aprender e criar!
          </section>
        </div>
      </div>

      <div id="tecnologias" className={styles.containerTecnologias}>
        <img className={styles.ImgFototec} src="/imagens/fotoTec.png" alt="" />
        <div className={styles.containerTecLeo}>
          <h3>TECNOLOGIAS</h3>
          <img className={styles.ImgFotecLeo} src="/imagens/tecnologiasLeo.png" alt="" />
        </div>
      </div>

      <div id="curriculo" className={styles.containerCurriculo}>
         <h3><FaRegHandPointRight className={styles.handFa} /> Meu Currículo <FaRegHandPointLeft className={styles.handFa}/></h3> 
        <section>
          Para visualizar meu currículo basta logar no google com sua conta e
          vai abrir no Word
        </section>
      </div>

      <div id="oportunidades" className={styles.containerOportunidades}>
        <h3>Disponível para oportunidades</h3>
        <label htmlFor=""> <FaRegHandPointRight className={styles.handFa1}/>  leojn8@gmail.com <FaRegHandPointLeft className={styles.handFa1}/></label>
      </div>
    </div>
  );
}
