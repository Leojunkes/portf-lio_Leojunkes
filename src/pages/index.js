import styles from "../styles/Home.module.css";
import { FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";
import {
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineGithub,
  ImWhatsapp,
} from "react-icons/ai";

import { Button, Flex, Label, HStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsopen] = useState(false);

  const isDivShow = (
    <>
      <Flex h="100%" maxWidth="25rem" flexDirection="column">
        <img
          className={styles.imgCadastro}
          src="/imagens/klcadastro2.png"
          alt=""
        />
        <label htmlFor="">
          Uma aplicação para cadastro de empresas, cadastre empresas e seus
          contatos, CRUD total do zero,backEnd com Node-ts e frontEnd com
          React-js.
        </label>
        <a target="_blank">
          <Button
            border="none"
            colorScheme="blue"
            _hover
            style={{ marginTop: 5 }}
          >
            Breve em Produção
          </Button>
        </a>
      </Flex>

      <Flex marginBottom="100px" maxWidth="25rem" flexDirection="column">
        <img
          className={styles.imgNihongo}
          src="/imagens/listAfazeres.png"
          alt=""
        />
        <label htmlFor="">
          Uma lista de Afazeres, simples e funcional, crie sua lista, exclua,
          salve, marque como Realizado, recurso salva no localStorage.
        </label>
        <Button
          border="none"
          colorScheme="green"
          style=""
          _hover
          style={{ marginTop: 5 }}
        >
          Em breve
        </Button>
      </Flex>
    </>
  );

  function apertar(e) {
    e.preventDefault();
    setIsopen(true);
  }

  return (
    <>
      <Flex
        height="100%"
        background="var(--hardblue)"
        color="var(--gray-50)"
        alignItems="center"
        paddingBottom="10px"
        flexDirection="column"
        textAlign="center"
      >
        <img
          style={{ width: "11.563rem", height: "10.625rem", marginTop: "13px" }}
          src="/imagens/leoFoto.png"
          alt=""
        />
        <h3>Leonardo Junkes</h3>
        <section>
          <label>
            Estudante de programação(React-js, React-native, Next-js)
          </label>
          <label htmlFor="">motorista de App.</label>
        </section>
        <Button bg="var(--creme)" _hover border="0" size="sm" type="button">
          Contato
        </Button>
        <div className={styles.containerIcons}>
          <HStack spacing={4}>
            <a
              target="blank"
              href="https://www.linkedin.com/in/leonardo-junkes-nicolodelli-88089866/"
            >
              <AiOutlineLinkedin style={{ fontSize: 25 }} />
            </a>
            <a target="blank" href="https://github.com/Leojunkes">
              <AiOutlineGithub style={{ fontSize: 25 }} />
            </a>
            <a
              target="blank"
              href="https://api.whatsapp.com/send?phone=5548999311384"
            >
              <AiOutlineWhatsApp style={{ fontSize: 25 }} />
            </a>
          </HStack>
        </div>
      </Flex>

      <Flex
        h="100%"
        bg="var(--creme)"
        color="var(--hardblue)"
        mt="10px"
        justifyContent="space-between"
        paddingLeft="13px"
        flexDirection="column"
      >
        <h3 style={{ textAlign: "center" }}>PROJETOS</h3>
        <Flex
          className={styles.containerProjLeo}
          h="100%"
          justifyContent="space-around"
        >
          <Flex h="100%" maxWidth="25rem" flexDirection="column">
            <img
              className={styles.imgCadastro}
              src="/imagens/klcadastro2.png"
              alt=""
            />
            <label htmlFor="">
              Uma aplicação para cadastro de empresas, cadastre empresas e seus
              contatos, CRUD total do zero,backEnd com Node-ts e frontEnd com
              React-js.
            </label>
            <a target="_blank">
              <Button
                marginBottom="10px"
                border="none"
                colorScheme="blue"
                _hover
                style={{ marginTop: 5 }}
              >
                Breve em Produção
              </Button>
            </a>
          </Flex>

          <Flex maxWidth="25rem" flexDirection="column">
            <img
              className={styles.imgNihongo}
              src="/imagens/listAfazeres.png"
              alt=""
            />
            <label htmlFor="">
              Uma lista de Afazeres, simples e funcional, crie sua lista,
              exclua, salve, marque como Realizado, recurso salva no
              localStorage.
            </label>
            <a target="_blank" href="https://junkes-lista.vercel.app/">
              <Button
                marginBottom="10px"
                border="none"
                colorScheme="green"
                style=""
                _hover
                style={{ marginTop: 5 }}
              >
                Faça o teste
              </Button>
            </a>
          </Flex>
        </Flex>
        <a target="_blank" href="http://github.com/Leojunkes">
          <Flex ml="-3.5" color="gray.50" bg="gray.900">
            <label style={{ margin: "10px auto" }}>
              Conheça mais projetos no meu GITHUB clicando AQUI
            </label>
          </Flex>
        </a>
      </Flex>

      <div
        styles={{ margiLeft: 10 }}
        id="sobreMim"
        className={styles.containerSobreMim}
      >
        <h3>SOBRE MIM</h3>
        <div className={styles.containerSection}>
          <section htmlFor="">
            Olá sou Leonardo Junkes, estudo e desenvolvo fazem mais de 2
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
          <img
            className={styles.ImgFotecLeo}
            src="/imagens/tecnologiasLeo.png"
            alt=""
          />
        </div>
      </div>

      <div id="curriculo" className={styles.containerCurriculo}>
        <h3>
          <FaRegHandPointRight className={styles.handFa} />{" "}
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1poVD7AfymYo3GZnWVbX6oeM3xEvBslwm/edit"
          >
            Meu Currículo
          </a>{" "}
          <FaRegHandPointLeft className={styles.handFa} />
        </h3>
        <section style={{ marginLeft: "8px", color: "gray" }}>
          Para visualizar meu currículo basta logar no google com sua conta e
          abrir no Word
        </section>
      </div>

      <div id="oportunidades" className={styles.containerOportunidades}>
        <h3>Disponível para oportunidades</h3>
        <a target="_blank" href="mailto:leojn8@gmail.com">
          <label htmlFor="">
            {" "}
            <FaRegHandPointRight
              className={styles.handFa1}
            /> leojn8@gmail.com{" "}
            <FaRegHandPointLeft className={styles.handFa1} />
          </label>
        </a>
      </div>
      <Flex />
    </>
  );
}
