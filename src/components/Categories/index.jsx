import styles from './Categories.module.css';
import { GiAk47U, GiCarWheel, GiCampingTent, GiConsoleController, GiCrossedSwords, GiGhost } from "react-icons/gi";

export default function Categories({ onClick, btnActive }) {
    return (
        <section className={styles.categories}>
            <button id='0' onClick={(e) => onClick('Lançamentos', e.currentTarget.id)} className={`${styles.btn} ${btnActive == '0' ? styles.active : ''}`}><GiConsoleController size={18}/><span>Lançamentos</span></button>
            <button id='1' onClick={(e) => onClick('Corrida', e.currentTarget.id)} className={`${styles.btn} ${btnActive === '1' ? styles.active : ''}`}><GiCarWheel size={18}/><span>Corridas</span></button>
            <button id='2' onClick={(e) => onClick('Terror', e.currentTarget.id)} className={`${styles.btn} ${btnActive === '2' ? styles.active : ''}`}><GiGhost size={18}/><span>Terror</span></button>
            <button id='3' onClick={(e) => onClick('RPG', e.currentTarget.id)} className={`${styles.btn} ${btnActive === '3' ? styles.active : ''}`}><GiCrossedSwords size={18}/><span>RPG</span></button>
            <button id='4' onClick={(e) => onClick('Tiro', e.currentTarget.id)} className={`${styles.btn} ${btnActive === '4' ? styles.active : ''}`}><GiAk47U size={20}/><span>Tiro</span></button>
            <button id='5' onClick={(e) => onClick('Aventura', e.currentTarget.id)} className={`${styles.btn} ${btnActive === '5' ? styles.active : ''}`}><GiCampingTent size={18}/><span>Aventura</span></button>
        </section>
    );
}