'use client';
import styles from './SonaButton.module.css';
import Link from 'next/link';

export interface SonaButtonProps extends React.AriaAttributes {
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
    ...ariaProps
}) => {
    const appearanceClass = styles[`sonaButton_${appearance}`];

    if (renderAsSpan) {
        return (
            <span className={`${styles.sonaButton} ${appearanceClass} ${className}`} style={style} id={id} {...ariaProps}>
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
                {...ariaProps}
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
            {...ariaProps}
        >
            {children ?? ''}
        </button>
    );
};