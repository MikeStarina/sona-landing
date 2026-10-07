import { gsap } from 'gsap';
import { VOICEOVER_LOOP_GAP_MS, VOICEOVER_TIMELINE } from '../model/VOICEOVER_TIMELINE';

const STATUS_BLUE = 'oklch(0.6058 0.23045 259.4745)';
const STATUS_GREEN = 'oklch(0.80046 0.237942 146.9935)';
const EQ_REST_SCALE = 0.1;
const WORD_IN_DURATION = 0.38;
const CUE_DURATION = 0.45;

export type GlassFrameTimelineTargets = {
    statusContainer: HTMLElement;
    status: HTMLElement;
    percent: HTMLElement;
    label: HTMLElement;
    figure: Element;
    overlayLeft: HTMLElement;
    overlayRight: HTMLElement;
    caption: HTMLElement;
    words: (HTMLElement | null)[];
    eqLines: (HTMLElement | null)[];
    buttonsContainer: HTMLElement;
    overlayLeftInner: HTMLElement;
    overlayLeftBlur: HTMLElement;
    overlayLeftFade: HTMLElement;
    overlayDots: HTMLElement;
    iconProgress: HTMLElement;
    iconCheck: HTMLElement;
};

export const buildGlassFrameTimeline = (targets: GlassFrameTimelineTargets) => {
    const duration = VOICEOVER_TIMELINE.durationMs / 1000;
    const t20 = duration * 0.2;
    const t95 = duration * 0.95;

    const {
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
        iconProgress,
        iconCheck,
    } = targets;
    const rows = gsap.utils.toArray<HTMLElement>(buttonsContainer.children);
    const buttons = rows.flatMap((row) => gsap.utils.toArray<HTMLElement>(row.children));
    gsap.set(buttons, { autoAlpha: 0, x: -1000 });
    gsap.set(buttonsContainer, { autoAlpha: 1 });
    const scene = [statusContainer, caption, buttonsContainer, overlayLeftInner];

    const getCenterX = () => (statusContainer.offsetWidth - status.offsetWidth) / 2;
    const getRightX = () => statusContainer.offsetWidth - status.offsetWidth;

    const eqSetters = eqLines.map((el) => {
        if (!el) {
            return null;
        }

        gsap.set(el, {
            transformOrigin: '50% 50%',
            scaleY: EQ_REST_SCALE,
        });

        return gsap.quickSetter(el, 'scaleY') as (value: number) => void;
    });

    const applyEq = (timeMs: number) => {
        const { eq, eqFps, bars, durationMs } = VOICEOVER_TIMELINE;

        if (timeMs <= 0 || timeMs >= durationMs) {
            eqSetters.forEach((set) => set?.(EQ_REST_SCALE));
            return;
        }

        const frameCount = eq.length / bars;
        const frame = Math.min(frameCount - 1, Math.floor((timeMs / 1000) * eqFps));
        const offset = frame * bars;

        eqSetters.forEach((set, index) => {
            const value = eq[offset + index] ?? EQ_REST_SCALE * 100;
            set?.(Math.max(EQ_REST_SCALE, value / 100));
        });
    };

    const voice = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        onUpdate() {
            const timeMs = Math.min(this.time(), duration) * 1000;
            // percent.textContent = `${Math.round((timeMs / VOICEOVER_TIMELINE.durationMs) * 100)}%`;
            applyEq(timeMs);
        },
    });

    voice.to({}, { duration, ease: 'none' }, 0);

    voice.set(status, { autoAlpha: 0, xPercent: 0, x: () => getRightX(), backgroundColor: STATUS_BLUE }, 0);
    voice.set(overlayLeftBlur, { autoAlpha: 0 }, 0);
    voice.set(overlayLeftFade, { autoAlpha: 0 }, 0);
    voice.set(overlayLeftInner, { autoAlpha: 0 }, 0);
    voice.set(overlayRight, { autoAlpha: 0 }, 0);
    voice.set(caption, { overflow: 'hidden' }, 0);
    voice.set(overlayDots, { autoAlpha: 0 }, 0);
    voice.set(iconProgress, { autoAlpha: 1, scale: 1 }, 0);
    voice.set(iconCheck, { autoAlpha: 0, scale: 0 }, 0);
    voice.call(() => {
        label.textContent = 'Understanding Context';
        applyEq(0);
    }, undefined, 0);

    words.forEach((wordEl, index) => {
        const word = VOICEOVER_TIMELINE.words[index];
        if (!wordEl || !word) {
            return;
        }

        gsap.set(wordEl, { autoAlpha: 0, y: 8, filter: 'blur(6px)' });
        voice.to(wordEl, {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: WORD_IN_DURATION,
            ease: 'power2.out',
        }, word.start / 1000);
    });
    voice.to(status, { x: () => getRightX(), duration: CUE_DURATION }, t20);
    voice.to(overlayRight, { display: 'none', duration: 0 }, t20);
    voice.to(overlayRight, { width: '0', duration: 0 }, t20);
    voice.to(overlayLeft, { width: 'calc(100% - 175px)', duration: CUE_DURATION }, t20);
    voice.set(caption, { overflow: 'visible' }, t20);


    voice.to(overlayRight, { display: 'flex', duration: 0 }, t95);
    voice.call(() => {
        applyEq(VOICEOVER_TIMELINE.durationMs + 1);
    }, undefined, duration);



    const statusTl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
    });
    statusTl.call(() => {
        label.textContent = 'Understanding Context';
    }, undefined, 0);
    statusTl.to(status, { autoAlpha: 1, duration: CUE_DURATION }, 0);
    statusTl.to(overlayDots, { autoAlpha: 1, duration: CUE_DURATION }, 0);
    statusTl.to(overlayLeftBlur, { autoAlpha: 1, duration: CUE_DURATION }, 0);
    statusTl.to(overlayLeftFade, { autoAlpha: 1, duration: CUE_DURATION }, 0);
    statusTl.set(overlayLeftInner, { '--glow-w': '45%', '--glow-h': '85%', '--green-gradient-width': '0%' }, 0);
    statusTl.to(overlayLeftInner, { autoAlpha: 1, duration: CUE_DURATION }, 0);
    statusTl.to(percent, { textContent: '100%', duration: 6, ease: 'power2.inOut', snap: { textContent: 1 } }, 0);
    statusTl.call(() => {
        label.textContent = 'Search and analyze';
    }, undefined, 2);
    statusTl.call(() => {
        label.textContent = 'Taking action';
    }, undefined, 4.5);
    statusTl.to(overlayLeftInner, { '--green-gradient-width': '15%', duration: CUE_DURATION }, '>');
    statusTl.call(() => {
        label.textContent = 'Remember';
    }, undefined, 6);
    statusTl.to(iconProgress, { autoAlpha: 0, scale: 0 }, 6);
    statusTl.to(iconCheck, { autoAlpha: 1, scale: 1, duration: CUE_DURATION }, 6);
    statusTl.to(overlayLeftInner, { '--glow-w': '0%', '--glow-h': '0', duration: 0 }, 6);
    statusTl.to(overlayLeftInner, { '--green-gradient-width': '45%', duration: CUE_DURATION / 2 }, 6);
    statusTl.fromTo(figure,
        { color: STATUS_BLUE },
        { color: STATUS_GREEN, duration: CUE_DURATION, ease: 'none' },
        6);
    statusTl.fromTo(status,
        { backgroundColor: STATUS_BLUE },
        { backgroundColor: STATUS_GREEN, duration: CUE_DURATION, ease: 'none' },
        6);
    statusTl.set(caption, { overflow: 'hidden' }, 6);
    statusTl.to(status, { x: () => getCenterX(), duration: CUE_DURATION / 2 }, 6);
    statusTl.to(overlayLeft, { width: '50%', duration: CUE_DURATION / 2 }, 6);
    statusTl.to(overlayRight, { width: '50%', duration: CUE_DURATION / 2 }, 6);



    const master = gsap.timeline({
        paused: true,
        repeat: -1,
        repeatDelay: 1,
    });





    master.fromTo(scene, { autoAlpha: 0 }, {
        autoAlpha: 1,
        duration: 0,
        ease: 'power2.out',
    }, 0);




    master.addLabel('afterVoice', duration);
    master.addLabel('afterStatus', duration + 6);
    master.add(voice, 0);
    master.add(statusTl, 'afterVoice')

    master.to(buttons, {
        autoAlpha: 1,
        x: 0,
        duration: 0.4,
        stagger: { each: 0.05, from: 'start' },
        ease: 'power4.out',
    }, 'afterStatus');
    master.to(buttons, {
        x: -1000,
        duration: 0.05,
        ease: 'power4.in',
        stagger: { each: 0.05, from: 'start' },
    }, '>+2');
    master.to(scene, {
        autoAlpha: 0,
        duration: 0,
        ease: 'power2.in',
      }, '>');




    return master;
};
