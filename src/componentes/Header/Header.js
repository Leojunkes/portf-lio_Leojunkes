import styles from './Header.module.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
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
        <Menu>
          <MenuButton
            style={{ background: '#322b3d', border: '0' }}
            as=""
            rightIcon=""
          >
            <GiHamburgerMenu style={{ color: 'white', fontSize: '25' }} />
          </MenuButton>
          <MenuList style={{ background: '#fcca97' }}>
            <a href="#projetos">
              <MenuItem style={{ background: '#322b3d', color: 'white' }}>
                Projetos
              </MenuItem>
            </a>
            <a href="#sobreMim">
              <MenuItem style={{ background: '#322b3d', color: 'white' }}>
                Sobre Mim
              </MenuItem>
            </a>
            <a href="#tecnologias">
              <MenuItem style={{ background: '#322b3d', color: 'white' }}>
                Tecnologias
              </MenuItem>
            </a>
            <a href="#curriculo">
              <MenuItem style={{ background: '#322b3d', color: 'white' }}>
                Meu Currículo
              </MenuItem>
            </a>
            <a href="#contato">
              <MenuItem style={{ background: '#322b3d', color: 'white' }}>
                Contato
              </MenuItem>
            </a>
          </MenuList>
        </Menu>
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
