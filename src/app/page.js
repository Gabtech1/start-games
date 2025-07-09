'use client';
import { useState } from "react";
import styles from "./styles/page.module.css";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Search from "@/components/Search";
import Cards from "@/components/Cards";
import { gamesByCategory, initGames } from "@/app/services/filterService";

export default function Home() {
  const [gameList, setGameList] = useState(initGames);

 const handleCategoryFilter = (category) => {
    setGameList(gamesByCategory(category));
  }

  return (
    <div className={styles.page}>
      <div className={styles.decoration}></div>
      <Hero />
      <p className={styles.description}>Confira os jogos disponíveis em nosso catálogo.</p>
      <section className={styles.main}>
        <Categories onClick={handleCategoryFilter} />
        <Search />
        <h2>Catálogo</h2>
        <div className={styles.cards}>
          {gameList.map((game, index) => (
            <Cards
            key={index}
            image={game.image}
            name={game.name}
            category={game.category}
            description={game.description}
            platform={game.platform}
            price={game.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
