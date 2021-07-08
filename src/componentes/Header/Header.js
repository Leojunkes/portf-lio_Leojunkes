import styles from './Header.module.css';
import Link from 'next/link';

export function Header() {
  return (
    <div className={styles.containerHeader}>
      <img src="/imagens/logoLeojunkes.png" alt="" />
      <div className={styles.containerOpcoes}>
        <Link href="#projetos">Projestos</Link>
        <Link href="#projetos">Sobre Mim</Link>
        <Link href="#projetos">Tecnologias</Link>
        <Link href="#projetos">Currículo</Link>
        <Link href="#projetos">Contato</Link>
      </div>
    </div>
  );
}
