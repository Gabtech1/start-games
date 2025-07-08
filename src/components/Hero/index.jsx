import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}></div>
        <h1 className={styles.title}>Start Games</h1>
    </section>
  );
}