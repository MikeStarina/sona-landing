import styles from './FooterNavigation.module.css';
import { FOOTER_NAVIGATION_DATA } from '../model/FOOTER_NAVIGATION_DATA';
import Link from 'next/link';

export const FooterNavigation = () => {
    return (
        <nav className={styles.footerNavigation}>
            {FOOTER_NAVIGATION_DATA.map(_ => (
                <div className={styles.footerNavigation__container} key={_.label}>
                    <span>{_.label}</span>
                    <ul className={styles.footerNavigation__list}>
                        {_.links.map(link => (
                            <li key={link.label}>
                                <Link
                                    href={{ pathname: link.href, hash: link.hash }}
                                    target={link.target}
                                    className={styles.footerNavigation__link}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};