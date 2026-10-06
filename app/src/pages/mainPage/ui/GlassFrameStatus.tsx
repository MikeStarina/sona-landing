'use client';
import { useLayoutEffect, useState } from 'react';
import styles from './GlassFrameStatus.module.css';

export const GlassFrameStatus = () => {
    const [dots, setDots] = useState<Array<{top: string; right: string; animationDelay: string}> | null>(null);

    useLayoutEffect(function EF_initDots() {
        const dots = Array.from({ length: 50 }).map((_) => ({
            top: `${20 + Math.random() * 60}%`,
            right: `${0 + Math.random() * 25}%`,
            animationDelay: `${Math.random() * 1000}ms`,
        }));
        setDots(dots);
    }, []);
    return (
        <div className={styles.glassFrame__overlay}>
            <div className={styles.statusContainer} data-gf="status-container">
                <div className={styles.status} data-gf="status">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.16667 18.3333C14.2293 18.3333 18.3333 14.2293 18.3333 9.16667C18.3333 4.10406 14.2293 0 9.16667 0C4.10406 0 0 4.10406 0 9.16667C0 14.2293 4.10406 18.3333 9.16667 18.3333ZM13.5486 7.13197C13.8171 6.86348 13.8171 6.42818 13.5486 6.1597C13.2802 5.89121 12.8448 5.89121 12.5764 6.1597L8.02083 10.7152L5.75697 8.45136C5.48848 8.18288 5.05318 8.18288 4.7847 8.45136C4.51621 8.71985 4.51621 9.15515 4.7847 9.42364L7.5347 12.1736C7.80318 12.4421 8.23848 12.4421 8.50697 12.1736L13.5486 7.13197Z" fill="white" />
                    </svg>
                    <p data-gf="label">
                        Understanding Context
                    </p>
                    <span className={styles.status__percent} data-gf="percent">
                        0%
                    </span>
                    <svg viewBox="0 0 50 300" width="50" height="300" className={styles.status__figure} data-gf="figure">
                        <path fill="currentColor" d="M 0 0 L 50 0 A 25 25 0 0 0 26 25 L 25 300 L 24 25 A 25 25 0 0 0 0 0 Z" />
                    </svg>
                </div>
            </div>
            <div className={styles.glassFrame__overlayContainer}>
                <div className={styles.glassFrame__overlayLeft} data-gf="overlay-left">
                    <div className={styles.glassFrame__overlayLeftInner} data-gf="overlay-left-inner"></div>
                    <div className={styles.glassFrame__overlayLeftBlur} data-gf="overlay-left-blur"></div>
                    <div className={styles.glassFrame__overlayLeftFade} data-gf="overlay-left-fade"></div>
                    <div className={styles.glassFrame__overlayDots} data-gf="overlay-dots">
                        {dots?.map((dot, index) => (
                            <span key={index} className={styles.glassFrame__dot} style={{
                                top: dot.top,
                                right: dot.right,
                                animationDelay: dot.animationDelay,
                            }}></span>
                        ))}
                    </div>
                </div>
                <div className={styles.glassFrame__overlayRight} data-gf="overlay-right"></div>
            </div>
        </div>
    );
};
