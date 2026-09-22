'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Faq.module.css';
import { FAQ_DATA } from '../model/faqData';

const getOffsetTop = (element: HTMLElement, container: HTMLElement) => {
    return element.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
};

export const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState<string>(FAQ_DATA[0].question);
    const questionsListRef = useRef<HTMLUListElement>(null);
    const answersListRef = useRef<HTMLUListElement>(null);
    const questionRefs = useRef<(HTMLLIElement | null)[]>([]);
    const answerRefs = useRef<(HTMLLIElement | null)[]>([]);
    const activeQuestionRef = useRef(activeQuestion);
    const isProgrammaticScrollRef = useRef(false);
    const programmaticScrollTimeoutRef = useRef<number | null>(null);

    activeQuestionRef.current = activeQuestion;

    const clearProgrammaticScrollTimer = () => {
        if (programmaticScrollTimeoutRef.current !== null) {
            window.clearTimeout(programmaticScrollTimeoutRef.current);
            programmaticScrollTimeoutRef.current = null;
        }
    };

    const scrollQuestionIntoView = (index: number) => {
        const container = questionsListRef.current;
        const question = questionRefs.current[index];
        if (!container || !question) {
            return;
        }

        const questionTop = getOffsetTop(question, container);
        const questionBottom = questionTop + question.offsetHeight;
        const viewTop = container.scrollTop;
        const viewBottom = viewTop + container.clientHeight;
        const padding = 12;

        if (questionTop < viewTop + padding) {
            container.scrollTo({ top: questionTop - padding, behavior: 'smooth' });
            return;
        }

        if (questionBottom > viewBottom - padding) {
            container.scrollTo({
                top: questionBottom - container.clientHeight + padding,
                behavior: 'smooth',
            });
        }
    };

    const setActiveByIndex = (index: number) => {
        const nextQuestion = FAQ_DATA[index].question;
        if (nextQuestion === activeQuestionRef.current) {
            return;
        }

        setActiveQuestion(nextQuestion);
        scrollQuestionIntoView(index);
    };

    const scrollToAnswer = (index: number) => {
        const container = answersListRef.current;
        const answer = answerRefs.current[index];
        if (!container || !answer) {
            return;
        }

        isProgrammaticScrollRef.current = true;
        const targetTop = getOffsetTop(answer, container);

        const releaseLock = () => {
            isProgrammaticScrollRef.current = false;
            container.removeEventListener('scrollend', releaseLock);
            clearProgrammaticScrollTimer();
        };

        container.scrollTo({
            top: targetTop,
            behavior: 'smooth',
        });

        container.addEventListener('scrollend', releaseLock, { once: true });
        clearProgrammaticScrollTimer();

        const startedAt = performance.now();
        let lastTop = container.scrollTop;
        let settledFrames = 0;
        let hasMoved = false;

        const waitUntilSettled = () => {
            if (Math.abs(container.scrollTop - targetTop) < 2 || performance.now() - startedAt > 2000) {
                releaseLock();
                return;
            }

            if (Math.abs(container.scrollTop - lastTop) > 1) {
                hasMoved = true;
                settledFrames = 0;
                lastTop = container.scrollTop;
            } else if (hasMoved || performance.now() - startedAt > 400) {
                settledFrames += 1;
                if (settledFrames >= 3) {
                    releaseLock();
                    return;
                }
            }

            programmaticScrollTimeoutRef.current = window.setTimeout(waitUntilSettled, 100);
        };

        programmaticScrollTimeoutRef.current = window.setTimeout(waitUntilSettled, 100);
    };

    const handleQuestionClick = (index: number) => {
        setActiveQuestion(FAQ_DATA[index].question);
        scrollToAnswer(index);
    };

    const handleAnswersScroll = () => {
        const container = answersListRef.current;
        if (!container || isProgrammaticScrollRef.current) {
            return;
        }

        let nextIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        answerRefs.current.forEach((answer, index) => {
            if (!answer) {
                return;
            }

            const distance = Math.abs(getOffsetTop(answer, container) - container.scrollTop);
            if (distance < closestDistance) {
                closestDistance = distance;
                nextIndex = index;
            }
        });

        setActiveByIndex(nextIndex);
    };

    useEffect(() => {
        return () => {
            clearProgrammaticScrollTimer();
        };
    }, []);

    return (
        <div className={styles.faq}>
            <div className={styles.faq__questions}>
            <ul className={styles.faq__questionsList} ref={questionsListRef}>
                {FAQ_DATA.map((item, id) => {
                    const isActive = item.question === activeQuestion;
                    return (
                        <li
                            key={id}
                            ref={(element) => {
                                questionRefs.current[id] = element;
                            }}
                            className={`${styles.faq__question} ${isActive ? styles.faq__question_active : ''}`}
                            onClick={() => handleQuestionClick(id)}
                        >
                            {item.question}
                        </li>
                    )
                })}
            </ul>
            </div>
            <ul
                className={styles.faq__answersList}
                ref={answersListRef}
                onScroll={handleAnswersScroll}
            >
                {FAQ_DATA.map((item, id) => {
                    const isActive = item.question === activeQuestion;
                    return (
                        <li
                            key={id}
                            ref={(element) => {
                                answerRefs.current[id] = element;
                            }}
                            className={`${styles.faq__answer} ${isActive ? styles.faq__answer_active : ''}`}
                        >
                            {item.answer}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};
