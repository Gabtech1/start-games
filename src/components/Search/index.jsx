import styles from './Search.module.css';
import { IoMdSearch } from "react-icons/io";

export default function Search(){
    return(
        <div className={styles.search}>
            <IoMdSearch size={20}/>
            <input 
                type="text" 
                className={styles.input} 
                placeholder="Digite o nome do jogo..."
            />
        </div>
    );
}