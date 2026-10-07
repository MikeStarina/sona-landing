'use client';
import styles from './Header.module.css';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { DownloadSona } from '@/src/features/downloadSona/DownloadSona';
import dynamic from 'next/dynamic';
const Glass = dynamic(() => import('@samasante/liquid-glass').then(mod => mod.Glass), { ssr: false });
import { SonaButton } from '@/src/shared/sonaButton/SonaButton';
import { NAV_LIST } from './model/NAV_LIST';


export const Header = () => {
    // id of the nav item whose sublist is currently open (null = all closed)
    const [openId, setOpenId] = useState<number | null>(null);
    const navRef = useRef<HTMLElement>(null);

    // Close on click/tap outside the navigation
    useEffect(() => {
        if (openId === null) return;
        const onPointerDown = (e: PointerEvent) => {
            if (!navRef.current?.contains(e.target as Node)) setOpenId(null);
        };
        document.addEventListener('pointerdown', onPointerDown);
        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, [openId]);

    // Close when focus leaves the disclosure (e.g. Tab past the last link)
    const handleBlur = (e: React.FocusEvent<HTMLLIElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenId(null);
    };

    // Keyboard support per WAI-ARIA "Disclosure Navigation Menu" pattern
    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, id: number) => {
        const root = e.currentTarget;
        const trigger = root.querySelector<HTMLButtonElement>('button');
        const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('ul a'));
        const isOpen = openId === id;
        const index = links.indexOf(document.activeElement as HTMLAnchorElement);

        const open = () => {
            flushSync(() => setOpenId(id));
            root.querySelector<HTMLAnchorElement>('ul a')?.focus();
        };

        switch (e.key) {
            case 'Escape':
                if (!isOpen) return;
                e.preventDefault();
                setOpenId(null);
                trigger?.focus();
                break;
            case 'ArrowDown':
                e.preventDefault();
                if (!isOpen) open();
                else links[(index + 1) % links.length]?.focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (!isOpen) open();
                else links[(index - 1 + links.length) % links.length]?.focus();
                break;
            case 'Home':
                if (!isOpen) return;
                e.preventDefault();
                links[0]?.focus();
                break;
            case 'End':
                if (!isOpen) return;
                e.preventDefault();
                links[links.length - 1]?.focus();
                break;
        }
    };

    return (
        <header className={styles.header}>
            <Glass
                height={50}
                radius={50}
                refract={
                    <img
                        src="/refractions/refraction_0.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                <nav ref={navRef} aria-label="Main" style={{ minHeight: '100%' }}>
                    <ul className={styles.header__navList}>
                        {NAV_LIST.map((item) => {

                            if (item.children) {
                                const isOpen = openId === item.id;
                                const sublistId = `header-sublist-${item.id}`;
                                return (
                                    <li
                                        key={item.id}
                                        onBlur={handleBlur}
                                        onKeyDown={(e) => handleKeyDown(e, item.id)}
                                    >
                                        <SonaButton
                                            appearance="transparent"
                                            className={styles.header__navListButton}
                                            onClick={() => setOpenId(isOpen ? null : item.id)}
                                            aria-expanded={isOpen}
                                            aria-controls={sublistId}
                                        >
                                            {item.name}
                                            <svg aria-hidden="true" focusable="false" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s ease' }}>
                                                <path d="M3.51172 4.09375C3.35156 4.09375 3.21875 4.03125 3.08984 3.90625L0.152344 0.898438C0.0546875 0.796875 0 0.675781 0 0.53125C0 0.238281 0.234375 0 0.523438 0C0.671875 0 0.804688 0.0625 0.910156 0.167969L3.51562 2.83984L6.11328 0.167969C6.21875 0.0625 6.35547 0 6.49609 0C6.78906 0 7.02344 0.238281 7.02344 0.53125C7.02344 0.675781 6.97266 0.796875 6.87109 0.898438L3.93359 3.90234C3.80859 4.03125 3.67188 4.09375 3.51172 4.09375Z" fill="white" />
                                            </svg>
                                        </SonaButton>
                                        <ul id={sublistId} className={styles.header__navListSublist} hidden={!isOpen}>
                                            {item.children.map((child) => (
                                                <li key={child.id}>
                                                    <Link
                                                        href={{ pathname: item.href, hash: child.hash }}
                                                        className={styles.header__navListSublistLink}
                                                        onClick={() => setOpenId(null)}
                                                    >
                                                        {child.icon && <span aria-hidden="true">{child.icon}</span>}
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                )
                            }

                            return (
                                <li key={item.id}>
                                    <Link className={styles.header__navLink} href={{ pathname: item.href, hash: item.hash }} style={{ height: '100%' }}>
                                        <SonaButton appearance="transparent" className={styles.header__navListButton} renderAsSpan>{item.name}</SonaButton>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {/* Action */}
                <DownloadSona appearance='blue' className={styles.header__actionButton} showIcon iconSize='small' />
            </div>
        </header>
    );
};
