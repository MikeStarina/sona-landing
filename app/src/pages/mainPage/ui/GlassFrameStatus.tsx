'use client';
import { useLayoutEffect, useState } from 'react';
import styles from './GlassFrameStatus.module.css';

export const GlassFrameStatus = () => {
    const [dots, setDots] = useState<Array<{ top: string; right: string; animationDelay: string }> | null>(null);

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
                    <span className={styles.status__iconContainer}>
                        <svg data-gf="icon-progress" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.status__iconProgress}>
                            <path d="M16.3451 7.45409C16.0737 4.04837 13.2239 1.3692 9.74843 1.3692C7.65884 1.3692 5.79574 2.33687 4.58181 3.8512C4.37299 4.11168 4.18353 4.38821 4.01555 4.6786C3.82622 5.00588 3.40744 5.11772 3.08015 4.9284C2.75287 4.73908 2.64104 4.32029 2.83036 3.99301C3.03313 3.64248 3.26171 3.30888 3.51349 2.99481C4.97611 1.17025 7.22584 0 9.74843 0C13.9928 0 17.4638 3.31063 17.7202 7.49042L18.3923 6.81832C18.6597 6.55097 19.0932 6.55097 19.3605 6.81832C19.6279 7.08567 19.6279 7.51914 19.3605 7.78649L17.5349 9.61209C17.2676 9.87945 16.8341 9.87945 16.5667 9.61209L14.7411 7.78649C14.4738 7.51914 14.4738 7.08567 14.7411 6.81832C15.0085 6.55097 15.442 6.55097 15.7093 6.81832L16.3451 7.45409Z" fill="#11EC62" />
                            <path d="M0.200515 8.18752C-0.0668383 8.45487 -0.0668383 8.88834 0.200515 9.15569C0.467868 9.42305 0.901333 9.42305 1.16869 9.15569L1.84079 8.48359C2.09719 12.6634 5.56828 15.974 9.81261 15.974C12.3352 15.974 14.5849 14.8038 16.0475 12.9792C16.2993 12.6651 16.5279 12.3315 16.7307 11.981C16.92 11.6537 16.8082 11.2349 16.4809 11.0456C16.1536 10.8563 15.7348 10.9681 15.5455 11.2954C15.3775 11.5858 15.188 11.8623 14.9792 12.1228C13.7653 13.6371 11.9022 14.6048 9.81261 14.6048C6.33709 14.6048 3.48733 11.9256 3.21595 8.51992L3.85172 9.15569C4.11907 9.42305 4.55254 9.42305 4.81989 9.15569C5.08724 8.88834 5.08724 8.45487 4.81989 8.18752L2.99429 6.36192C2.72693 6.09457 2.29347 6.09457 2.02612 6.36192L0.200515 8.18752Z" fill="#11EC62" />
                        </svg>
                        <svg data-gf="icon-check" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.16667 18.3333C14.2293 18.3333 18.3333 14.2293 18.3333 9.16667C18.3333 4.10406 14.2293 0 9.16667 0C4.10406 0 0 4.10406 0 9.16667C0 14.2293 4.10406 18.3333 9.16667 18.3333ZM13.5486 7.13197C13.8171 6.86348 13.8171 6.42818 13.5486 6.1597C13.2802 5.89121 12.8448 5.89121 12.5764 6.1597L8.02083 10.7152L5.75697 8.45136C5.48848 8.18288 5.05318 8.18288 4.7847 8.45136C4.51621 8.71985 4.51621 9.15515 4.7847 9.42364L7.5347 12.1736C7.80318 12.4421 8.23848 12.4421 8.50697 12.1736L13.5486 7.13197Z" fill="white" />
                        </svg>
                    </span>
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
