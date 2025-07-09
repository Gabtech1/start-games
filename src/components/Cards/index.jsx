import styles from './Cards.module.css';
import Image from 'next/image';
import { FaXbox, FaPlaystation } from "react-icons/fa6";

export default function Cards({ image, name, category, description, platform, price }) {

    const iconMap = {
        Xbox: <FaXbox size={20} color="#0F780F" />,
        Playstation: <FaPlaystation size={20} color="#003E93" />
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image src={image} alt='game picture' />
            </div>
            <div className={styles.cardContent}>
                <h3>{name}</h3>
                <span>{category}</span>
                <p className={styles.description}>{description}</p>
                <div className={styles.platforms}>
                    <div className={styles.icons}>
                        {platform.map((icon, index) => {
                            return (
                                <span key={index}>
                                    {iconMap[icon] || <span>{icon}</span>}
                                </span>
                            );
                        })}
                    </div>
                    <p>R$ {price}</p>
                </div>
            </div>
        </div>
    );
}