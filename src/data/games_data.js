import forza from '../../public/forza.webp';
import granTurismo from '../../public/gt.webp';
import needForSpeed from '../../public/nfs.webp';
import theCrewMotorfest from '../../public/thecrew.webp';
import dirt5 from '../../public/dirt.webp';
import residentEvilVillage from '../../public/revillage.webp';
import silentHill2 from '../../public/silent.webp';
import outlast from '../../public/outlast.webp';
import residentEvil7 from '../../public/re7.webp';
import theEvilWithin2 from '../../public/thevil.webp';
import diablo4 from '../../public/diablo.webp';
import theWitcher3 from '../../public/thewitcher.webp';
import finalFantasy7Remake from '../../public/final_fantasy.webp';
import eldenRing from '../../public/elden_ring.webp';
import darkSouls3 from '../../public/dark_souls.webp';
import callOfDutyMW2 from '../../public/cod_mw2.webp';
import battlefield2042 from '../../public/battlefield.webp';
import rainbowSixSiege from '../../public/rainbow_six.webp';
import theDivision2 from '../../public/thedivision.webp';
import destiny2 from '../../public/destiny.webp';
import redDeadRedemption2 from '../../public/rdr2.webp';
import assassinsCreedOdyssey from '../../public/ac_odyssey.webp';
import shadowOfTheTombRaider from '../../public/shadow_tr.webp';
import godOfWarRagnarok from '../../public/gow.webp';
import horizonZeroDawn from '../../public/horizon.webp';
import grandTheftAutoVI from '../../public/gta.webp';
import theWitcher4 from '../../public/thewitcher_iv.webp';
import finalFantasyXVI from '../../public/final_fantasy_xvi.webp';
import assassinsCreedShadows from '../../public/ac_shadows.webp';
import eldenRingNightreign from '../../public/elden_ring_n.webp';

//Coleção de dados dos jogos disponíveis no catálogo
// Cada objeto representa um jogo e suas propriedades
export const games = [
    {
        id: 1,
        name: 'Forza Horizon 5',
        category: 'Corrida',
        price: 299.99,
        description: 'Forza Horizon 5 é um jogo de Corrida em mundo aberto que se passa no México, oferecendo uma experiência vibrante e diversificada com uma vasta gama de carros e ambientes.',
        platform: ['Xbox'],
        image: forza,
    },
    {
        id: 2,
        name: 'Gran Turismo Sport',
        category: 'Corrida',
        price: 249.99,
        description: 'Gran Turismo Sport é um simulador de Corrida que foca na experiência de Corrida realista, com uma ampla gama de carros e pistas.',
        platform: ['Playstation'],
        image: granTurismo,
    },
    {
        id: 3,
        name: 'Need for Speed Heat',
        category: 'Corrida',
        price: 199.99,
        description: 'Need for Speed Heat é um jogo de Corrida que combina a cultura de rua com a experiência de Corrida em alta velocidade, oferecendo uma ampla gama de personalizações de carros e um mundo aberto vibrante.',
        platform: ['Xbox', 'Playstation'],
        image: needForSpeed,
    },
    {
        id: 4,
        name: 'The crew Motorfest',
        category: 'Corrida',
        price: 249.99,
        description: 'The Crew Motorfest é um jogo de Corrida em mundo aberto que se passa em uma recriação vibrante de Honolulu, oferecendo uma experiência diversificada com uma vasta gama de carros e ambientes.',
        platform: ['Xbox', 'Playstation'],
        image: theCrewMotorfest,
    },
    {
        id: 5,
        name: 'Dirt 5',
        category: 'Corrida',
        price: 99.99,
        description: 'Dirt 5 é um jogo de Corrida off-road que oferece uma experiência vibrante e diversificada com uma vasta gama de carros e ambientes.',
        platform: ['Xbox', 'Playstation'],
        image: dirt5,
    },
    {
        id: 6,
        name: 'Resident Evil Village',
        category: 'Terror',
        price: 249.99,
        description: 'Ambientado anos após os eventos terríveis do aclamado Resident Evil 7, a nova história começa com Ethan Winters e sua esposa, Mia, vivendo tranquilamente em um novo lugar, livres dos pesadelos do passado. Mas quando estavam começando a construir uma nova vida, ocorre novamente uma tragédia.',
        platform: ['Xbox', 'Playstation'],
        image: residentEvilVillage,
    },
    {
        id: 7,
        name: 'Silent Hill 2',
        category: 'Terror',
        price: 149.99,
        description: 'Um clássico do Terror psicológico que se passa em uma cidade misteriosa, Assuma o papel de James Sunderland e explore a quase deserta cidade de Silent Hill atraído até este lugar misterioso por uma carta de sua esposa, que morreu há três anos, James vasculha a cidade atrás de vestígios dela e se depare com monstros perversos e ameaçadores.',
        platform: ['Xbox', 'Playstation'],
        image: silentHill2,
    },
    {
        id: 8,
        name: 'Outlast',
        category: 'Terror',
        price: 99.99,
        description: 'Outlast é um jogo de Terror em primeira pessoa que se passa em um hospital psiquiátrico abandonado, oferecendo uma experiência intensa e envolvente com uma narrativa rica e jogabilidade desafiadora.',
        platform: ['Xbox', 'Playstation'],
        image: outlast,
    },
    {
        id: 9,
        name: 'Resident Evil 7',
        category: 'Terror',
        price: 199.99,
        description: 'Medo e isolamento se infiltram nas paredes de uma casa de campo abandonada. O horror atinge uma imersão incrível conforme os jogadores entram em um novo e aTerrorizante mundo lutando para sobreviver',
        platform: ['Xbox', 'Playstation'],
        image: residentEvil7,
    },
    {
        id: 10,
        name: 'the evil within 2',
        category: 'Terror',
        price: 149.99,
        description: 'O detetive Sebastian Castellanos perdeu tudo, mas quando ganha uma chance de salvar sua filha, ele deve descer mais uma vez ao mundo tenebroso de STEM. Ameaças assustadoras surgem de cada canto à medida que o mundo se deforma ao seu redor.',
        platform: ['Xbox', 'Playstation'],
        image: theEvilWithin2,
    },
    {
        id: 11,
        name: 'Diablo IV',
        category: 'RPG',
        price: 299.99,
        description: 'Diablo IV é um jogo de RPG de ação que se passa no mundo sombrio de Sanctuary, onde os jogadores enfrentam hordas de inimigos e exploram masmorras em busca de loot e poder.',
        platform: ['Xbox', 'Playstation'],
        image: diablo4,
    },
    {
        id: 12,
        name: 'The Witcher 3',
        category: 'RPG',
        price: 249.99,
        description: 'The Witcher 3: Wild Hunt é um jogo de RPG de ação em mundo aberto que segue Geralt de Rivia, um caçador de monstros, em sua busca por sua filha adotiva. O jogo é conhecido por sua narrativa rica, personagens complexos e um vasto mundo aberto para explorar.',
        platform: ['Xbox', 'Playstation'],
        image: theWitcher3,
    },
    {
        id: 13,
        name: 'Final Fantasy VII Remake',
        category: 'RPG',
        price: 199.99,
        description: 'Final Fantasy VII Remake é uma reimaginação do clássico jogo de RPG, oferecendo uma nova perspectiva sobre a história de Cloud Strife e seus aliados enquanto lutam contra a corporação Shinra e o vilão Sephiroth.',
        platform: ['Xbox', 'Playstation'],
        image: finalFantasy7Remake,
    },
    {
        id: 14,
        name: 'Elden Ring',
        category: 'RPG',
        price: 299.99,
        description: 'Vencedor de centenas de prêmios, ELDEN RING é o aclamado e épico RPG de ação ambientado em um vasto mundo de fantasia sombria. Jogadores embarcam em uma missão épica com a liberdade de explorar e se Aventurar em seu próprio ritmo.',
        platform: ['Xbox', 'Playstation'],
        image: eldenRing,
    },
    {
        id: 15,
        name: 'Dark Souls III',
        category: 'RPG',
        price: 249.99,
        description: 'Com o fogo se apagando e o mundo caindo em ruínas, você precisa se Aventurar em um universo repleto de inimigos e ambientes colossais. Jogadores entrarão em um mundo de trevas e atmosfera épica, com uma jogabilidade mais ágil e combates mais intensos. Agora só restam cinzas... Prepare-se para abraçar a escuridão mais uma vez!',
        platform: ['Xbox', 'Playstation'],
        image: darkSouls3,
    },
    {
        id: 16,
        name: 'Call of Duty: Modern Warfare II',
        category: 'Tiro',
        price: 299.99,
        description: 'Call of Duty: Modern Warfare II é um jogo de Tiro em primeira pessoa que continua a história da franquia, apresentando uma campanha envolvente e modos multijogador competitivos.',
        platform: ['Xbox', 'Playstation'],
        image: callOfDutyMW2,
    },
    {
        id: 17,
        name: 'Battlefield 2042',
        category: 'Tiro',
        price: 299.99,
        description: 'Battlefield 2042 é um jogo de Tiro em primeira pessoa que se passa em um futuro próximo, apresentando batalhas em larga escala e um foco em multiplayer.',
        platform: ['Xbox', 'Playstation'],
        image: battlefield2042,
    },
    {
        id: 18,
        name: 'rainbow six siege',
        category: 'Tiro',
        price: 199.99,
        description: 'Rainbow Six Siege é um jogo de Tiro tático em primeira pessoa que foca na destruição ambiental e no trabalho em equipe. Os jogadores assumem o papel de agentes de operações especiais em cenários de combate realistas.',
        platform: ['Xbox', 'Playstation'],
        image: rainbowSixSiege,
    },
    {
        id: 19,
        name: 'The Division 2',
        category: 'Tiro',
        price: 199.99,
        description: 'The Division 2 é um jogo de Tiro em terceira pessoa que se passa em um mundo aberto pós-apocalíptico. Os jogadores assumem o papel de agentes da Divisão, uma força de elite encarregada de restaurar a ordem em Washington, D.C.',
        platform: ['Xbox', 'Playstation'],
        image: theDivision2,
    },
    {
        id: 20,
        name: 'destiny 2',
        category: 'Tiro',
        price: 199.99,
        description: 'Destiny 2 é um jogo de Tiro em primeira pessoa que combina elementos de RPG e MMO. Os jogadores assumem o papel de Guardiões, protetores da última cidade segura da Terra, e embarcam em missões para derrotar inimigos alienígenas e explorar mundos variados.',
        platform: ['Xbox', 'Playstation'],
        image: destiny2,
    },
    {
        id: 21,
        name: 'Red Dead Redemption 2',
        category: 'Aventura',
        price: 299.99,
        description: 'Red Dead Redemption 2 é um jogo de ação e Aventura em mundo aberto, ambientado no final da era do Velho Oeste. Os jogadores assumem o papel de Arthur Morgan, um fora da lei que luta para sobreviver em um mundo em rápida mudança.',
        platform: ['Xbox', 'Playstation'],
        image: redDeadRedemption2,
    },
    {
        id: 22,
        name: "Assassin's Creed Odyssey",
        category: "Aventura",
        price: 249.99,
        description: "Assassin's Creed Odyssey é um jogo de ação e Aventura em mundo aberto, ambientado na Grécia Antiga. Os jogadores assumem o papel de um mercenário espartano e embarcam em uma jornada épica para descobrir seu passado e moldar seu destino.",
        platform: ['Xbox', 'Playstation'],
        image: assassinsCreedOdyssey,
    },
    {
        id: 23,
        name: 'Shadow of the Tomb Raider',
        category: 'Aventura',
        price: 249.99,
        description: 'Shadow of the Tomb Raider é um jogo de ação e Aventura em terceira pessoa que segue Lara Croft em sua jornada. Com um mundo aberto rico em detalhes e uma narrativa envolvente, os jogadores exploram tumbas antigas e enfrentam inimigos mortais.',
        platform: ['Xbox', 'Playstation'],
        image: shadowOfTheTombRaider,
    },
    {
        id: 24,
        name: 'God of War Ragnarok',
        category: 'Aventura',
        price: 199.99,
        description: 'God of War Ragnarok é um jogo de ação e Aventura em terceira pessoa que segue Kratos e seu filho Atreus em sua jornada para enfrentar novos deuses e monstros da mitologia nórdica. Com uma narrativa profunda e combates intensos, os jogadores exploram um mundo rico e detalhado.',
        platform: ['Playstation'],
        image: godOfWarRagnarok,
    },
    {
        id: 25,
        name: 'Horizon Zero Dawn',
        category: 'Aventura',
        price: 199.99,
        description: 'Horizon Zero Dawn é um jogo de ação e Aventura em mundo aberto, ambientado em um futuro pós-apocalíptico onde máquinas dominam a Terra. Os jogadores assumem o papel de Aloy, uma caçadora que busca descobrir seu passado e salvar o mundo.',
        platform: ['Playstation'],
        image: horizonZeroDawn,
    },
    {
        id: 26,
        name: 'Grand Theft Auto VI',
        category: 'Lançamentos',
        price: 699.99,
        description: 'Jason e Lucia sempre souberam que tudo estava contra eles. Mas, depois que um serviço simples dá errado, eles vão parar no lado mais sombrio do lugar mais ensolarado dos Estados Unidos, em meio a uma conspiração criminosa.',
        platform: ['Xbox', 'Playstation'],
        image: grandTheftAutoVI,
    },
    {
        id: 27,
        name: 'The Witcher 4',
        category: 'Lançamentos',
        price: 499.99,
        description: 'The Witcher 4 é a tão aguardada sequência da aclamada série de RPG. Os jogadores retornarão ao mundo de Geralt de Rivia, explorando novas terras, enfrentando inimigos formidáveis e tomando decisões que moldarão o destino do mundo.',
        platform: ['Xbox', 'Playstation'],
        image: theWitcher4,
    },
    {
        id: 28,
        name: 'Final Fantasy XVI',
        category: 'Lançamentos',
        price: 399.99,
        description: 'Final Fantasy XVI é a mais recente adição à icônica série de RPG, oferecendo uma nova história épica, personagens memoráveis e um mundo vasto para explorar.',
        platform: ['Xbox', 'Playstation'],
        image: finalFantasyXVI,
    },
    {
        id: 29,
        name: "Assassin's Creed Shadows",
        category: 'Lançamentos',
        price: 299.99,
        description: "Torne-se uma assassina shinobi letal e um poderoso samurai lendário enquanto explora um mundo aberto maravilhoso em tempos caóticos. Desvende a história, domine estilos de luta, personalize seu esconderijo e traga uma nova era ao Japão.",
        platform: ['Xbox', 'Playstation'],
        image: assassinsCreedShadows,
    },
    {
        id: 30,
        name: 'Elden Ring Nightreign',
        category: 'Lançamentos',
        price: 599.99,
        description: 'Elden Ring Nightreign é uma expansão do aclamado jogo de ação e RPG Elden Ring. Os jogadores explorarão novas áreas, enfrentarão inimigos desafiadores e descobrirão uma narrativa envolvente que se passa após os eventos do jogo base.',
        platform: ['Xbox', 'Playstation'],
        image: eldenRingNightreign,
    },
]