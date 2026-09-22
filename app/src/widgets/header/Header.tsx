import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { DownloadSona } from '@/src/features/downloadSona/DownloadSona';

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
            {/* Logo block */}
            <div className={styles.header__logoBlock}>
                <Image src="/sona_main_logo.png" alt="logo" width={40} height={40} unoptimized />
                <div className={styles.header__logoText}>
                    <p className="">Sona</p>
                    <span>Voice OS</span>
                </div>
            </div>
            {/* Navigation list */}
            <nav style={{ minHeight: '100%'}}>
                <ul className={styles.header__navList}>
                    {NAV_LIST.map((item) => (
                        <li key={item.id}>
                            <Link className={styles.header__navLink} href={item.href} style={{ height: '100%'}}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Action */}
           <DownloadSona appearance='blue' className={styles.header__actionButton} showIcon={false} />
        </header>
    );
};
