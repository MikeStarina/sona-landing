import styles from './ContextCard.module.css';
import type { IContextScreenCard } from '../model/CONTEXT_SCREEN_CARDS';
import Image from 'next/image';

export const ContextCard = ({ card }: { card: IContextScreenCard }) => {
    return (
        <li className={styles.contextCard}>
            <div className={styles.contextCard__textBlock}>
                <h4 className={styles.contextCard__title}>{card.title}</h4>
                <p className={styles.contextCard__text}>{card.description}</p>
            </div>
            <div className={styles.contextCard__cover}>
                <Image src={card.cover} alt="" width={354} height={283} />
            </div>
        </li>
    );
};