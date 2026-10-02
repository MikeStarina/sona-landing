'use client';
import { SonaButton } from '../../../shared/sonaButton/SonaButton';
import styles from './Lens.module.css';
import dynamic from 'next/dynamic';
const Glass = dynamic(() => import('@samasante/liquid-glass').then(mod => mod.Glass), { ssr: false });

export const Lens = () => {
    return (
        <div className={styles.container}>
            <Glass
                width={360}
                height={360}
                radius={999}
                refract={
                    <img
                        src="/hero_bg_with_clouds.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                behind="#74B6E2"
                optics={{
                    strength: 0.2,
                    depth: 0.9,
                    curvature: 0.5,
                    dispersion: 0.35,
                    bend: 1,
                    frost: 0.5,
                }}
                style={{ width: 360, height: 360 }}
            />
            <div className={styles.hero__lens}>
                <div className={styles.hero__lensContent}>
                    <h1 className={styles.hero__title}>Your personal<br />voice agent</h1>
                    <p className={styles.hero__description}>
                        for macOS
                    </p>
                </div>
                <SonaButton appearance="transparent" className={styles.hero__ctaButton}>
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.000976562 10.4863V0.998047C0.000976562 0.321289 0.390625 0 0.855469 0C1.06055 0 1.27246 0.0615234 1.48438 0.177734L9.44824 4.83301C10.0156 5.16113 10.207 5.37988 10.207 5.74219C10.207 6.09766 10.0156 6.32324 9.44824 6.65137L1.48438 11.3066C1.27246 11.416 1.06055 11.4844 0.855469 11.4844C0.390625 11.4844 0.000976562 11.1631 0.000976562 10.4863Z" fill="white" />
                    </svg>
                    Watch Demo
                </SonaButton>
            </div>
        </div>
    );
};