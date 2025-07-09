import styles from './Search.module.css';
import { IoMdSearch } from "react-icons/io";

export default function Search({ onChange, text }){
    return(
        <div className={styles.search}>
            <IoMdSearch size={20}/>
            <input
                onChange={(e) => onChange(e.target.value)}
                type="text"
                value={text}
                className={styles.input}
                placeholder="Digite o nome do jogo..."
            />
        </div>
    );
}