import styles from './Header.module.css';

import {GiHamburgerMenu} from 'react-icons/gi'
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
            <Tab
              style={{
                color: 'white',
                marginTop: 10,
                background: '#322b3d',
                border: '0',
              }}
            >
              Projetos
            </Tab>
            <Tab
              style={{
                color: 'white',
                marginTop: 10,
                background: '#322b3d',
                border: '0',
              }}
            >
              Sobre Mim
            </Tab>
            <Tab
              style={{
                color: 'white',
                marginTop: 10,
                background: '#322b3d',
                border: '0',
              }}
            >
              Tecnologias
            </Tab>
            <Tab
              style={{
                color: 'white',
                marginTop: 10,
                background: '#322b3d',
                border: '0',
              }}
            >
              Meu Currículo
            </Tab>
            <Tab
              style={{
                color: 'white',
                marginTop: 10,
                background: '#322b3d',
                border: '0',
              }}
            >
              Contato
            </Tab>
          </TabList>
        </Tabs>
      </div>

      <div className={styles.containerMenu}>
        <Menu>
          <MenuButton style={{background:'#322b3d', border: '0'}} as="" rightIcon="">
            <GiHamburgerMenu style={{color:'white', fontSize:'25'}} />
          </MenuButton>
          <MenuList style={{background:'#fcca97'}}>
            <MenuItem style={{background:'#322b3d', color:'white'}}>Projetos</MenuItem>
            <MenuItem style={{background:'#322b3d', color:'white'}}>Sobre Mim</MenuItem>
            <MenuItem style={{background:'#322b3d', color:'white'}}>Tecnologias</MenuItem>
            <MenuItem style={{background:'#322b3d', color:'white'}}>Meu Currículo</MenuItem>
            <MenuItem style={{background:'#322b3d', color:'white'}}>Contato</MenuItem>
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
