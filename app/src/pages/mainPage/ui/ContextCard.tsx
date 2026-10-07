import styles from './ContextCard.module.css';
import type { IContextScreenCard } from '../model/CONTEXT_SCREEN_CARDS';
import Image from 'next/image';
import { SonaButton } from '@/src/shared/sonaButton/SonaButton';

export const ContextCard = ({ card }: { card: IContextScreenCard }) => {
    return (
        <div className={styles.contextCard}>
            <div className={styles.contextCard__textBlock}>
                <h4 className={styles.contextCard__title}>{card.title}</h4>
                <p className={styles.contextCard__text}>{card.description}</p>
            </div>
            <div className={styles.contextCard__cover}>
                <div className={styles.contextCard__coverFrame}>
                    {card.title === 'Local Storage' && <LocalStorageCover />}
                    {card.title === 'Memory Controls' && <MemoryControlsCover />}
                    {card.title === 'Action Controls' && <ActionControlsCover />}
                </div>
                <Image src={card.cover} alt="" width={354} height={283} />
            </div>
        </div>
    );
};


const LocalStorageCover = () => {
    return (
        <div className={styles.actionControlsCover}>
            <div className={styles.actionControlsCover__inner}>
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.32812 17.8175C7.187 17.8175 6.96648 17.7646 6.73715 17.6411C1.72707 14.8185 -0.00176409 13.6366 -0.00176409 10.4171V3.66935C-0.00176409 2.7432 0.403982 2.4433 1.14491 2.13458C2.18574 1.71119 5.55519 0.432208 6.59602 0.132309C6.82535 0.0705646 7.08115 5.12227e-08 7.32812 5.12227e-08C7.5751 5.12227e-08 7.8309 0.0529234 8.06905 0.132309C9.10988 0.493952 12.4705 1.70237 13.5113 2.13458C14.2611 2.45212 14.658 2.7432 14.658 3.66935V10.4171C14.658 13.6366 12.938 14.8274 7.9191 17.6411C7.69859 17.7646 7.46925 17.8175 7.32812 17.8175ZM7.32812 16.221C7.46925 16.221 7.6192 16.1681 7.875 16.0093C11.9501 13.5307 13.2555 12.8163 13.2555 10.0907V3.94279C13.2555 3.64289 13.2026 3.51941 12.9645 3.4312C11.5973 2.96371 9.01285 2.02873 7.68095 1.4995C7.53982 1.44657 7.42515 1.42011 7.32812 1.42011C7.2311 1.42011 7.11643 1.43775 6.9753 1.4995C5.6434 2.02873 3.04133 2.90197 1.7006 3.4312C1.45363 3.52823 1.40071 3.64289 1.40071 3.94279V10.0907C1.40071 12.8163 2.70615 13.5396 6.78125 16.0093C7.04587 16.1681 7.187 16.221 7.32812 16.221ZM4.1439 11.9607V8.4501C4.1439 7.83266 4.40852 7.52394 4.92893 7.48866V6.44783C4.92893 4.82485 5.89919 3.73992 7.33695 3.73992C8.7747 3.73992 9.74496 4.82485 9.74496 6.44783V7.48866C10.2654 7.52394 10.5212 7.83266 10.5212 8.4501V11.9607C10.5212 12.6222 10.2301 12.9309 9.62147 12.9309H5.05242C4.4438 12.9309 4.1439 12.6222 4.1439 11.9607ZM5.84627 7.47984H8.82762V6.35081C8.82762 5.30998 8.22782 4.6308 7.33695 4.6308C6.44607 4.6308 5.84627 5.30998 5.84627 6.35081V7.47984Z" fill="white" />
                </svg>

                <p className={styles.contextCard__coverTitle}>All data is stored <br />locally</p>
                <span className={styles.contextCard__coverText}>Local data is deleted <br /> after 7 days</span>
            </div>
        </div>
    )
}


const MemoryControlsCover = () => {
    return (
        <div className={styles.actionControlsCover} style={{ borderRadius: '22px', width: 200, height: 100 }}>
            <div className={styles.actionControlsCover__inner} style={{ borderRadius: '18px', flexDirection: 'row', padding: '20px', gap: 0 }}>
                <div className={styles.memoryControlsCover__block}>
                    <p className={styles.contextCard__coverTitle}>9</p>
                    <span className={styles.contextCard__coverText}>Notes</span>
                </div>
                <div className={styles.memoryControlsCover__block}>
                    <p className={styles.contextCard__coverTitle}>13:00</p>
                    <span className={styles.contextCard__coverText}>Updated</span>
                </div>
            </div>
        </div>
    )
}

const ActionControlsCover = () => {
    return (
        <div className={styles.actionControlsCover}>
            <div className={styles.actionControlsCover__inner}>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9832 0H10.0312V0.644874C10.0312 2.67082 11.6736 4.31318 13.6996 4.31318H16.0861V6.76982C16.0861 8.79577 17.7284 10.4381 19.7544 10.4381H20.633V0.649814C20.633 0.290932 20.3421 0 19.9832 0Z" fill="white" />
                    <path d="M15.342 4.76953H5.05469V5.41441C5.05469 7.44035 6.69704 9.08271 8.72299 9.08271H11.1095V11.5394C11.1095 13.5653 12.7519 15.2077 14.7778 15.2077H15.6565V5.08396C15.6565 4.9103 15.5157 4.76953 15.342 4.76953Z" fill="white" />
                    <path d="M10.2873 9.5625H0V10.2074C0 12.2333 1.64235 13.8757 3.6683 13.8757H5.74039C5.91404 13.8757 6.05482 14.0165 6.05482 14.1901V16.3323C6.05482 18.3583 7.69717 20.0006 9.72312 20.0006H10.6018V9.87693C10.6018 9.70327 10.461 9.5625 10.2873 9.5625Z" fill="white" />
                </svg>
                <p className={styles.contextCard__coverTitle}>Create 3 tasks<br />in Jira?</p>
                <span className={styles.contextCard__coverText}>Creating 3 tasks <br /> in "Website Redesign"</span>
                <SonaButton
                    appearance='blue'
                    renderAsSpan
                    style={{ width: 'min-content', padding: '5px 7px', fontSize: '9px', gap: 4 }}
                >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.47723 8.9544C2.01063 8.9544 0.000471605 6.94425 0.000471605 4.47764C0.000471605 2.00664 2.01063 0.000876982 4.47723 0.000876982C6.94823 0.000876982 8.954 2.00664 8.954 4.47764C8.954 6.94425 6.94823 8.9544 4.47723 8.9544ZM3.98567 6.62385C4.13489 6.62385 4.26217 6.55363 4.35434 6.40879L6.41716 3.16094C6.46983 3.06878 6.52689 2.96783 6.52689 2.87127C6.52689 2.66499 6.34694 2.53332 6.15382 2.53332C6.03971 2.53332 5.9256 2.60354 5.84221 2.73521L3.96811 5.74605L3.07715 4.59614C2.96742 4.45131 2.87087 4.4118 2.74359 4.4118C2.54608 4.4118 2.39247 4.5742 2.39247 4.7717C2.39247 4.87265 2.43197 4.96921 2.4978 5.05698L3.59944 6.40879C3.71355 6.56241 3.83644 6.62385 3.98567 6.62385Z" fill="white" />
                    </svg>
                    Confirm
                </SonaButton>
            </div>
        </div>
    )
}