import styles from './Categories.module.css';
import Image from 'next/image';
import { BiJoystickButton } from "react-icons/bi";

export default function Categories(){
    return (
        <section>
            <button className={styles.btn}><BiJoystickButton /><span>Lançamentos</span></button>
        </section>
    );
}