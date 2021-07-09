import styles from './Header.module.css';
import Link from 'next/link';

export function Header() {
  return (
    <div className={styles.containerHeader}>
      <img src="/imagens/logoLeojunkes.png" alt="" />
      <div className={styles.containerOpcoes}>
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
      </div>
    </div>
  );
}
