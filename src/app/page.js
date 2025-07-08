import styles from "./styles/page.module.css";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.decoration}></div>
      <Hero />
      <p className={styles.description}>Confira os jogos disponíveis em nosso catálogo.</p>
      <Categories />
      <section className={styles.main}>
      </section>
    </div>
  );
}
