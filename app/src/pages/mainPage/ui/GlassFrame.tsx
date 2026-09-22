import styles from './GlassFrame.module.css';
import { GLASS_FRAME_BLOCKS_DATA } from '../model/GLASS_FRAME_BLOCKS_DATA';
import Image from 'next/image';
import { SonaButton } from '../../../shared/sonaButton/SonaButton';

export const GlassFrame = () => {
    return (
        <div className={styles.glassFrame}>
            <div className={styles.glassFrame__overlay}>
                <div className={styles.glassFrame__status}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.16667 18.3333C14.2293 18.3333 18.3333 14.2293 18.3333 9.16667C18.3333 4.10406 14.2293 0 9.16667 0C4.10406 0 0 4.10406 0 9.16667C0 14.2293 4.10406 18.3333 9.16667 18.3333ZM13.5486 7.13197C13.8171 6.86348 13.8171 6.42818 13.5486 6.1597C13.2802 5.89121 12.8448 5.89121 12.5764 6.1597L8.02083 10.7152L5.75697 8.45136C5.48848 8.18288 5.05318 8.18288 4.7847 8.45136C4.51621 8.71985 4.51621 9.15515 4.7847 9.42364L7.5347 12.1736C7.80318 12.4421 8.23848 12.4421 8.50697 12.1736L13.5486 7.13197Z" fill="white" />
                    </svg>
                    Understanding Context
                    <span>81%</span>
                    <svg viewBox="0 0 50 25" width="50" height="25" className={styles.glassFrame__statusFigure}>
                        <path fill="oklch(0.6058 0.23045 259.4745)" d="M 0 0 L 50 0 A 25 25 0 0 0 26 25 L 24 25 A 25 25 0 0 0 0 0 Z" />
                    </svg>
                </div>
                <div className={styles.glassFrame__overlayContainer}>
                    <div className={styles.glassFrame__overlayLeft}>
                        {Array.from({ length: 50 }).map((_, index) => (
                            <span key={index} className={styles.glassFrame__dot} style={{
                                top: `${20 + Math.random() * 60}%`,
                                right: `${0 + Math.random() * 25}%`,
                            }}></span>
                        ))}
                    </div>
                    <div className={styles.glassframe__line}></div>
                    <div className={styles.glassFrame__overlayRight}>
                        <div className={styles.glassFrame__row}>
                            {GLASS_FRAME_BLOCKS_DATA.row1.map((block, index) => (
                                <SonaButton key={index} className={styles.glassFrame__button} renderAsSpan>
                                    <Image src={block.icon} alt="logo" width={18} height={18} unoptimized />
                                    {block.label}
                                </SonaButton>
                            ))}
                        </div>
                        <div className={styles.glassFrame__row}>
                            {GLASS_FRAME_BLOCKS_DATA.row2.map((block, index) => (
                                <SonaButton key={index} className={styles.glassFrame__button} renderAsSpan>
                                    <Image src={block.icon} alt="logo" width={18} height={18} unoptimized />
                                    {block.label}
                                </SonaButton>
                            ))}
                        </div>
                        <div className={styles.glassFrame__row}>
                            {GLASS_FRAME_BLOCKS_DATA.row3.map((block, index) => (
                                <SonaButton key={index} className={styles.glassFrame__button} renderAsSpan>
                                    <Image src={block.icon} alt="logo" width={18} height={18} unoptimized />
                                    {block.label}
                                </SonaButton>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.glassFrame__container}>
                <span className={styles.glassFrame__text}>
                    <svg width="55" height="33" viewBox="0 0 55 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px', marginBottom: '4px' }}>
                        <g filter="url(#filter0_i_1079_15291)">
                            <rect width="55" height="33" rx="16.5" fill="url(#paint0_linear_1079_15291)" fillOpacity="0.9" />
                            <rect width="55" height="33" rx="16.5" fill="#006FFF" />
                            <rect x="9.77344" y="13.5" width="2" height="6" rx="1" fill="#E6E6E6" />
                            <rect x="13.9531" y="11.5" width="2" height="10" rx="1" fill="#E6E6E6" />
                            <rect x="18.1367" y="8.5" width="2" height="16" rx="1" fill="#E6E6E6" />
                            <rect x="22.3164" y="12.5" width="2" height="8" rx="1" fill="#E6E6E6" />
                            <rect x="26.5" y="9.5" width="2" height="14" rx="1" fill="#E6E6E6" />
                            <rect x="30.6836" y="13.5" width="2" height="6" rx="1" fill="#E6E6E6" />
                            <rect x="34.8633" y="11.5" width="2" height="10" rx="1" fill="#E6E6E6" />
                            <rect x="39.0469" y="11.5" width="2" height="10" rx="1" fill="#E6E6E6" />
                            <rect x="43.2266" y="13.5" width="2" height="6" rx="1" fill="#E6E6E6" />
                        </g>
                        <defs>
                            <filter id="filter0_i_1079_15291" x="0" y="0" width="57.25" height="35.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feMorphology radius="2.25" operator="erode" in="SourceAlpha" result="effect1_innerShadow_1079_15291" />
                                <feOffset dx="2.25" dy="2.25" />
                                <feGaussianBlur stdDeviation="2.25" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1079_15291" />
                            </filter>
                            <linearGradient id="paint0_linear_1079_15291" x1="27.5" y1="0" x2="27.5" y2="33" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" />
                            </linearGradient>
                        </defs>
                    </svg>
                    Hey, Sona! Can you figure out what’s going on with this project and just handle everything that needs to get done?”</span>
                <span className={styles.glassFrame__text}>figure out what’s going on with this project and just handle everything that needs to get done?”</span>
                <span className={styles.glassFrame__text}>on with this project and just handle everything that needs to get done?”</span>
            </div>
        </div>
    )
}