import { games } from "@/data/games_data.js";

export const initGames = games.filter(game => game.category === 'Lançamentos');


export const gamesByCategory = (category) => { 
    return games.filter(game => game.category === category);
}