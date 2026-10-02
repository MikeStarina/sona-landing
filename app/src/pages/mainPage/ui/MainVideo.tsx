'use client';
import dynamic from 'next/dynamic';
const Glass = dynamic(() => import('@samasante/liquid-glass').then(mod => mod.Glass), { ssr: false });
import styles from './MainVideo.module.css';

export const MainVideo = () => {
    return (
        <div className={styles.wrapper}>
            <Glass
                radius={32}
                refract={
                    <img
                        src="/refractions/refraction_1.png"
                        alt=""
                        style={{ width: "120%", height: "120%", objectFit: "cover", filter: 'blur(3px)' }}
                    />
                }
                behind="#74B6E2"
                optics={{
                    strength: 0.1,
                    depth: 0.05,
                    curvature: 0.5,
                    dispersion: 0.7,
                    bend: 1,
                    frost: 0.2,
                }}
                style={{ width: '100%', height: '100%' }}
            />
            <div className={styles.videoScreeen__container}>
                <p className={styles.videoScreeen__title}>
                    Sona understands, acts, and remembers. When you need text, just dictate.
                </p>
                <div className={styles.videoScreeen__video}>
                </div>
            </div>
        </div>
    );
};