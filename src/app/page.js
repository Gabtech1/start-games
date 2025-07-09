'use client';
import { useState } from "react";
import styles from "./styles/page.module.css";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Search from "@/components/Search";
import Cards from "@/components/Cards";
import { gamesByCategory, initGames, searchGames } from "@/app/services/filterService";

export default function Home() {
  const [gameList, setGameList] = useState(initGames);
  const [btnActive, setBtnActive] = useState(0);
  const [textInput, setTextInput] = useState('');

//Função que captura a categoria clicada através dos botões
 const handleCategoryFilter = (category, target) => {
    setGameList(gamesByCategory(category));
    setBtnActive(target);
    setTextInput('');
  }

  //Função que captura o texto digitado
  const handleSearchGames = (text) => {
    setTextInput(text);
    if(text.length >= 3){
      setGameList(searchGames(text));
    } else{
      setGameList(initGames)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.decoration}></div>
      <Hero />
      <p className={styles.description}>Confira os jogos disponíveis em nosso catálogo.</p>
      <section className={styles.main}>
        <Categories onClick={handleCategoryFilter} btnActive={btnActive}/>
        <Search onChange={handleSearchGames} text={textInput}/>
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
