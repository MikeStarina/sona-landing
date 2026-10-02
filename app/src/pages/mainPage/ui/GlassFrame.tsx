'use client';
import dynamic from 'next/dynamic';
const Glass = dynamic(() => import('@samasante/liquid-glass').then(mod => mod.Glass), { ssr: false });
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styles from './GlassFrame.module.css';
import { GLASS_FRAME_BLOCKS_DATA } from '../model/GLASS_FRAME_BLOCKS_DATA';
import { SonaButton } from '../../../shared/sonaButton/SonaButton';
import { VoiceoverCaption } from './VoiceoverCaption';
import { GlassFrameStatus } from './GlassFrameStatus';
import { buildGlassFrameTimeline } from '../lib/buildGlassFrameTimeline';

export const GlassFrame = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const root = rootRef.current;
        if (!root) {
            return;
        }

        const q = gsap.utils.selector(root);
        const statusContainer = q('[data-gf="status-container"]')[0] as HTMLElement | undefined;
        const status = q('[data-gf="status"]')[0] as HTMLElement | undefined;
        const percent = q('[data-gf="percent"]')[0] as HTMLElement | undefined;
        const label = q('[data-gf="label"]')[0] as HTMLElement | undefined;
        const figure = q('[data-gf="figure"]')[0];
        const overlayLeft = q('[data-gf="overlay-left"]')[0] as HTMLElement | undefined;
        const overlayRight = q('[data-gf="overlay-right"]')[0] as HTMLElement | undefined;
        const caption = q('[data-gf="caption"]')[0] as HTMLElement | undefined;
        const words = q('[data-gf="word"]') as HTMLElement[];
        const eqLines = q('[data-gf="eq-line"]') as HTMLElement[];
        const buttonsContainer = q('[data-gf="buttons-container"]')[0] as HTMLElement | undefined;
        const overlayLeftInner = q('[data-gf="overlay-left-inner"]')[0] as HTMLElement | undefined;
        const overlayLeftBlur = q('[data-gf="overlay-left-blur"]')[0] as HTMLElement | undefined;
        const overlayLeftFade = q('[data-gf="overlay-left-fade"]')[0] as HTMLElement | undefined;
        const overlayDots = q('[data-gf="overlay-dots"]')[0] as HTMLElement | undefined;
        if (!statusContainer || !status || !percent || !label || !figure || !overlayLeft || !overlayRight || !caption || !buttonsContainer || !overlayLeftInner || !overlayLeftBlur || !overlayLeftFade || !overlayDots) {
            return;
        }

        const ctx = gsap.context(() => {
            const master = buildGlassFrameTimeline({
                statusContainer,
                status,
                percent,
                label,
                figure,
                overlayLeft,
                overlayRight,
                caption,
                words,
                eqLines,
                buttonsContainer,
                overlayLeftInner,
                overlayLeftBlur,
                overlayLeftFade,
                overlayDots,
            });

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry?.isIntersecting) {
                        master.play();
                        return;
                    }

                    master.pause(0);
                },
                { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
            );

            observer.observe(root);

            return () => {
                observer.disconnect();
            };
        }, root);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className={styles.glassFrame} data-glass-frame ref={rootRef}>
            <GlassFrameStatus />
            <VoiceoverCaption />
            <div className={styles.glassFrame__buttonsContainer} data-gf="buttons-container">
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
    );
};
