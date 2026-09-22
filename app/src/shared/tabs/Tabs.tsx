'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './Tabs.module.css';

interface ITabsProps {
    items: {
        label: string;
        description?: string;
        value: string;
    }[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export const Tabs: React.FC<ITabsProps> = ({ items, value, onChange }) => {
    const activeItemRef = useRef<HTMLButtonElement>(null);
    const highlightRef = useRef<HTMLSpanElement>(null);

    useEffect(function EF_Highlight() {
        const button = activeItemRef.current;
        const highlight = highlightRef.current;
        if (!button || !highlight) return;
        highlight.style.maxWidth = `${button.offsetWidth}px`;
        highlight.style.left = `${button.offsetLeft}px`;
    }, [value, items]);

    return (
        <div className={`${styles.tabs__appearance} ${styles.tabs}`}>
            {items.map((item) => {
                const isActive = item.value === value;
                return (
                    <button
                        key={item.value}
                        className={`${styles.tabs__item} ${isActive ? styles.tabs__item_active : ''}`}
                        ref={isActive ? activeItemRef : undefined}
                        onClick={() => {
                            onChange?.(item.value)
                        }}
                    >
                        {item.label}
                        {item.description && <span className={`${styles.tabs__appearance} ${styles.tabs__appearance_description} ${styles.tabs__description}`}>{item.description}</span>}
                    </button>
                )
            })}
            <span className={styles.tabs__highlight} ref={highlightRef} />
        </div>
    );
};