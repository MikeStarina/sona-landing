import styles from './Plates.module.css';
import { PLATES_DATA } from '../model/PLATES_DATA';
import Image from 'next/image';

export const Plates = () => {
    return (
        <div className={styles.plates}>
            {PLATES_DATA.map((plate, index) => (
                <div className={styles.plates__mediaPlate} style={{ '--element-index': (index + 1) } as React.CSSProperties} key={index}>
                    <Image src={plate.icon} alt={plate.label} unoptimized width={75} height={75} />
                    {plate.label}
                </div>
            ))}
        </div>
    )
}