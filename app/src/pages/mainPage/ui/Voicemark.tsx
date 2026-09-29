'use client';

import styles from './Voicemark.module.css';
import { VOICEOVER_TIMELINE } from '../model/VOICEOVER_TIMELINE';

export const VoiceMark = () => {
    return (
        <div className={styles.voiceMark} aria-hidden>
            {Array.from({ length: VOICEOVER_TIMELINE.bars }, (_, index) => (
                <div
                    key={index}
                    className={styles.voiceMark__line}
                    data-gf="eq-line"
                />
            ))}
        </div>
    );
};
