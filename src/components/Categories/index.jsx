import styles from './Categories.module.css';
import { GiAk47U, GiCarWheel, GiCampingTent, GiConsoleController, GiCrossedSwords, GiGhost } from "react-icons/gi";

export default function Categories({ onClick }) {
    return (
        <section className={styles.categories}>
            <button onClick={() => onClick('Lançamentos')} className={styles.btn}><GiConsoleController size={18}/><span>Lançamentos</span></button>
            <button className={styles.btn}><GiCarWheel size={18}/><span>Corridas</span></button>
            <button className={styles.btn}><GiGhost size={18}/><span>Terror</span></button>
            <button className={styles.btn}><GiCrossedSwords size={18}/><span>RPG</span></button>
            <button className={styles.btn}><GiAk47U size={20}/><span>Tiro</span></button>
            <button className={styles.btn}><GiCampingTent size={18}/><span>Aventura</span></button>
        </section>
    );
}