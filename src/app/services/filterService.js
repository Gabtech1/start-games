import { games } from "@/data/games_data.js";

//Função que retorna a primeira página de jogos "lançamentos"
export const initGames = games.filter(game => game.category === 'Lançamentos');

//Função utilizada para filtrar os jogos por categorias
export const gamesByCategory = (category) => { 
    return games.filter(game => game.category === category);
};

//Função para buscar jogos conforme o texto digitado
export const searchGames = (text) => {
    return games.filter(game => 
        game.name.toLowerCase().includes(text.toLowerCase()) ||
        game.description.toLowerCase().includes(text.toLowerCase())
    );
};