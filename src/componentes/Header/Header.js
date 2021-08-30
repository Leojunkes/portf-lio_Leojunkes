import styles from './Header.module.css';
import { Flex } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from '@chakra-ui/react';

export function Header() {
  return (
    <div className={styles.containerHeader}>
      <img src="/imagens/logoLeojunkes.png" alt="" />
      <div className={styles.containerTablist}>
        <Tabs>
          <TabList>
            <a href="#projetos">
              <Tab
                style={{
                  color: 'white',
                  marginTop: 10,
                  background: '#322b3d',
                }}
              >
                Projetos
              </Tab>
            </a>
            <a href="#sobreMim">
              <Tab
                style={{
                  color: 'white',
                  marginTop: 10,
                  background: '#322b3d',
                }}
              >
                Sobre Mim
              </Tab>
            </a>
            <a href="#tecnologias">
              <Tab
                style={{
                  color: 'white',
                  marginTop: 10,
                  background: '#322b3d',
                }}
              >
                Tecnologias
              </Tab>
            </a>
            <a href="#curriculo">
              <Tab
                style={{
                  color: 'white',
                  marginTop: 10,
                  background: '#322b3d',
                }}
              >
                Meu Currículo
              </Tab>
            </a>
            <a href="#oportunidades">
              <Tab
                style={{
                  color: 'white',
                  marginTop: 10,
                  background: '#322b3d',
                }}
              >
                Contato
              </Tab>
            </a>
          </TabList>
        </Tabs>
      </div>

      <div className={styles.containerMenu}>
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="#projetos">Projetos</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#sobreMim">Sobre Mim</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#tecnologias">Tecnologias</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#curriculo">Meu Currículo</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#oportunidades">Contato</BreadcrumbLink>
          </BreadcrumbItem>

         
        </Breadcrumb>
      </div>

      {/* <div className={styles.containerOpcoes}>
        <Link href="#projetos">
          <label htmlFor="">Projetos |</label>
        </Link>
        <Link href="#sobreMim">
          <label htmlFor=""> Sobre Mim |</label>
        </Link>
        <Link href="#tecnologias">
          <label htmlFor=""> Tecnologias |</label>
        </Link>
        <Link href="#curriculo">
          <label htmlFor=""> Meu currículo |</label>
        </Link>
        <Link href="#oportunidades">
          <label htmlFor=""> Contato</label>
        </Link>
      </div> */}
    </div>
  );
}
