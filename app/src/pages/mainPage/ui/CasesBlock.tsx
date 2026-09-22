'use client';
import { useState } from 'react';
import styles from './CasesBlock.module.css';
import { CASES } from '../model/CASES';
import { SonaButton } from '../../../shared/sonaButton/SonaButton';
import Image from 'next/image';

export const CasesBlock = () => {
    const [activeCase, setActiveCase] = useState<typeof CASES[number]>(CASES[0]);
    return (
        <aside className={styles.casesBlock}>
            <div className={styles.casesBlock__wrapper}>
                <div className={styles.casesBlock__header}>
                    <p className={styles.casesBlock__title}>Use case:</p>
                    <div className={styles.casesBlock__listWrapper}>
                        <div className={styles.casesBlock__listGradient}></div>
                        <ul className={styles.casesBlock__list}>
                            {CASES.map((item) => {
                                const isActive = activeCase.label === item.label;
                                if (isActive) {
                                    return (
                                        <li key={item.label} className={styles.casesBlock__listItem}>
                                            <SonaButton
                                                appearance='blue'
                                                className={styles.casesBlock__listItemButton}
                                            >{item.label}</SonaButton>
                                        </li>
                                    )
                                }
                                return (
                                    <li key={item.label} className={styles.casesBlock__listItem}>
                                        <SonaButton
                                            className={styles.casesBlock__listItemButton}
                                            onClick={() => setActiveCase(item)}
                                        >{item.label}</SonaButton>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className={styles.casesBlock__contentWrapper}>
                    <SonaButton
                        className={styles.casesBlock__content}
                        renderAsSpan
                    >
                        <span className={styles.casesBlock__contentText}>Your request</span>
                        <span className={styles.casesBlock__contentValue}>{activeCase.text}</span>
                    </SonaButton>
                </div>

                <div className={styles.casesBlock__footer}>
                    <div className={styles.casesBlock__logoBlock}>
                        <Image src="/sona_main_logo.png" alt="" width={41} height={40} />
                        <div className={styles.casesBlock__logoBlockText}>
                            <p>Sona</p>
                            <span>Voice OS</span>
                        </div>
                    </div>
                    <p className={styles.casesBlock__footerText}>
                        Turns your request into polished text and inserts it directly where you need it.
                    </p>
                </div>
            </div>
        </aside>
    );
};