import styles from './Footer.module.css';

export function Footer() {
    const data = new Date().getFullYear();
  return (
    <div className={styles.containerFooter}>
      <label htmlFor="">©LeoJunkes | {data} </label>
    </div>
  );
}
