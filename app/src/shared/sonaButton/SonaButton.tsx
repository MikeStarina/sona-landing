'use client';
import styles from './SonaButton.module.css';
import Link from 'next/link';

export interface SonaButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    href?: string | { pathname: string, href: string };
    target?: '_blank' | '_self' | '_parent' | '_top';
    // loading?: boolean;
    renderAsSpan?: boolean; // if true, the button will be rendered as a span (no onClick or other actions - just ui feature)
    appearance?: 'white' | 'transparent' | 'blue';
    id?: string;
}

export const SonaButton: React.FC<SonaButtonProps> = ({
    children,
    onClick,
    className,
    style,
    disabled,
    href,
    target,
    // loading,
    renderAsSpan = false,
    appearance = 'white',
    id,
}) => {
    const appearanceClass = styles[`sonaButton_${appearance}`];

    if (renderAsSpan) {
        return (
            <span className={`${styles.sonaButton} ${appearanceClass} ${className}`} style={style} id={id}>
                {children ?? ''}
            </span>
        );
    }

    if (href) {
        return (
            <Link
                href={href}
                target={target}
                className={`${styles.sonaButton} ${appearanceClass} ${className}`}
                onClick={onClick}
                style={style}
                id={id}
            >
                {children ?? ''}
            </Link>
        );
    }

    return (
        <button className={`${styles.sonaButton} ${appearanceClass} ${className}`}
            onClick={onClick}
            style={style}
            id={id}
            disabled={disabled}
        >
            {children ?? ''}
        </button>
    );
};