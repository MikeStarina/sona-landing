'use client';

import { Fragment } from 'react';
import { VOICEOVER_TIMELINE } from '../model/VOICEOVER_TIMELINE';
import { VoiceMark } from './Voicemark';
import styles from './GlassFrame.module.css';

export const VoiceoverCaption = () => {
    return (
        <div className={styles.glassFrame__container} data-gf="caption">
            <div className={styles.glassFrame__textBlock}>
                <VoiceMark />
                {VOICEOVER_TIMELINE.words.map((word, index) => (
                    <Fragment key={index}>
                        {index > 0 ? ' ' : null}
                        <span className={styles.glassFrame__word} data-gf="word">
                            {word.t}
                        </span>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};
