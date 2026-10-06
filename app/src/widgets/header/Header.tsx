'use client';
import styles from './Header.module.css';
import Image from 'next/image';
// import Link from 'next/link';
import { DownloadSona } from '@/src/features/downloadSona/DownloadSona';
import dynamic from 'next/dynamic';
const Glass = dynamic(() => import('@samasante/liquid-glass').then(mod => mod.Glass), { ssr: false });
import { SonaButton } from '@/src/shared/sonaButton/SonaButton';

const NAV_LIST = [
    {
        id: 1,
        name: 'Product',
        href: '/'
    },
    {
        id: 2,
        name: 'How It Works',
        href: '/about'
    },
    {
        id: 3,
        name: 'Use Cases',
        href: '/contact'
    },
    {
        id: 4,
        name: 'Manifesto',
        href: '/contact'
    },
    {
        id: 5,
        name: 'Pricing',
        href: '/contact'
    }
]

export const Header = () => {
    return (
        <header className={styles.header}>
            <Glass
                height={50}
                radius={50}
                refract={
                    <img
                        src="/hero_bg_with_clouds.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: '0% 20%' }}
                    />
                }
                behind="#74B6E2"
                optics={{
                    strength: 0.2,
                    depth: 0.05,
                    curvature: 0.5,
                    dispersion: 0.7,
                    bend: 1,
                    frost: 0.1,
                }}
                style={{ width: '100%', height: '100%' }}
            />
            <div className={styles.header__content}>
                {/* Logo block */}
                <div className={styles.header__logoBlock}>
                    <Image src="/sona_main_logo.png" alt="logo" width={40} height={40} unoptimized />
                    <div className={styles.header__logoText}>
                        <p className="">Sona</p>
                        <span>Voice OS</span>
                    </div>
                </div>
                {/* Navigation list */}
                <nav style={{ minHeight: '100%' }}>
                    <ul className={styles.header__navList}>
                        {NAV_LIST.map((item) => (
                            <li key={item.id}>
                                <SonaButton appearance="transparent" className={styles.header__navListButton}>{item.name}</SonaButton>
                                {/* <Link className={styles.header__navLink} href={item.href} style={{ height: '100%' }}>{item.name}</Link> */}
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Action */}
                <DownloadSona appearance='blue' className={styles.header__actionButton} showIcon={false} />
            </div>
        </header>
    );
};
