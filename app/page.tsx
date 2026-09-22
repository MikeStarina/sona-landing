import styles from "./page.module.css";
import Image from 'next/image';
import { Pricing } from './src/widgets';
import { Faq } from './src/widgets/faq';
import { DownloadSona } from './src/features/downloadSona/DownloadSona';
import { SonaButton } from "./src/shared/sonaButton/SonaButton";
import { FooterNavigation } from './src/entities/footerNavigation';
import { Plates, GlassFrame, Roadmap, CasesBlock, ContextCard } from './src/pages/mainPage';
import { DEMO_SCREEN_LIST } from './src/pages/mainPage/model/DEMO_SCREEN_DURATIONS';
import { CONTEXT_SCREEN_CARDS } from './src/pages/mainPage/model/CONTEXT_SCREEN_CARDS';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Lens */}
          <div className={styles.hero__lens}>
            <div className={styles.hero__lensContent}>
              <h1 className={styles.hero__title}>Your personal<br />voice agent</h1>
              <p className={styles.hero__description}>
                for macOS
              </p>
            </div>
            <SonaButton appearance="transparent" className={styles.hero__ctaButton}>
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.000976562 10.4863V0.998047C0.000976562 0.321289 0.390625 0 0.855469 0C1.06055 0 1.27246 0.0615234 1.48438 0.177734L9.44824 4.83301C10.0156 5.16113 10.207 5.37988 10.207 5.74219C10.207 6.09766 10.0156 6.32324 9.44824 6.65137L1.48438 11.3066C1.27246 11.416 1.06055 11.4844 0.855469 11.4844C0.390625 11.4844 0.000976562 11.1631 0.000976562 10.4863Z" fill="white" />
              </svg>
              Watch Demo
            </SonaButton>
          </div>
          {/* Content */}
          <div className={styles.hero__content}>
            <p className={styles.hero__contentTitle}>
              Say what needs to get done.
            </p>
            <span className={styles.hero__contentSubtitle}>
              Ask questions, search and analyze files or the web, delegate multi-step tasks, and check project status – all by voice.
            </span>
          </div>
        </section>
        {/* Video Screen Section */}
        <section className={styles.videoScreeen}>
          <div className={styles.videoScreeen__container}>
            <p className={styles.videoScreeen__title}>
              Sona understands, acts, and remembers. When you need text, just dictate.
            </p>
            <div className={styles.videoScreeen__video}>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className={styles.features}>
          <Plates />
          <div className={styles.features__textBlock}>
            <h2 className={styles.features__title}>
              One voice agent across everything you do.
            </h2>
            <div className={styles.features__textGroup}>
              <p className={styles.features__text}>
                Sona turns speech into ready-to-use text and completed actions, remembers your projects, decisions, and working context, and learns how you work over time.
              </p>
              <p className={`${styles.features__text} ${styles.features__text_muted}`}>
                Wherever the task lives, your personal agent and the context it has built over time stay with you.
              </p>
            </div>
            <SonaButton className={styles.features__button}>
              <Image src="/sona_main_logo.png" alt="logo" width={22} height={22} unoptimized />
              One voice. One personal agent. All your work context.
            </SonaButton>
          </div>
        </section>
        {/* explainer Section */}
        <section className={styles.explainer}>
          <div className={styles.explainer__container}>
            <div className={styles.explainer__textBlock}>
              <h2 className={styles.explainer__title}>
                Voice isn't a new way to type. It's a new way to work.
              </h2>
              <p className={styles.explainer__description}>
                Tell Sona what you need done. It understands the context, finds and analyzes the right information, and takes the necessary actions.
              </p>
            </div>
            <div className={styles.explainer__textBlock}>
              <h2 className={styles.explainer__title}>
                Your voice starts the task. Sona carries it through
              </h2>
              <p className={styles.explainer__description}>
                Relevant context carries over from one request to the next, keeping your tasks and projects connected.
              </p>
            </div>
          </div>
          <GlassFrame />
          <span className={styles.explainer__imageGradient}></span>
          <Image src="/explainer_background.png" alt="explainer image" className={`${styles.explainer__image} ${styles.explainer__image_background}`} width={1440} height={582} unoptimized />
          <Image src="/explainer_foreground.png" alt="explainer image" className={`${styles.explainer__image} ${styles.explainer__image_foreground}`} width={1440} height={582} unoptimized />
        </section>
        {/* mode section */}
        <section className={styles.mode}>
          <h2 className={styles.mode__title}>
            One voice. <br />Two hotkeys.
          </h2>
          <Roadmap />
        </section>
        {/* demo screen section */}
        <section className={styles.demoScreen}>
          <div className={styles.demoScreen__bgImageContainerRight}>
            <Image src='/cloud_right_2.png' alt='' width={720} height={720} />
          </div>
          <div className={styles.demoScreen__bgImageContainerLeft}>
            <Image src='/cloud_left_2.png' alt='' width={720} height={720} />
          </div>
          <h2 className={styles.demoScreen__title}>
            See Sona handle a real <br />task from start to finish
          </h2>
          <div className={styles.demoScreen__videoContainer}>
            <div className={styles.demoScreen__videoWrapper}>
              <Image src='/demo_screen.jpg' alt='' width={1004} height={600} />
            </div>
            <ul className={styles.demoScreen__list}>
              {DEMO_SCREEN_LIST.map((_, idx) => {

                if (_.isActive) {
                  return (
                    <li key={idx} className={`${styles.demoScreen__listItem} ${styles.demoScreen__listItem_active}`}>
                      <SonaButton className={styles.demoScreen__listItemContent} renderAsSpan>
                        <span className={styles.demoScreen__listItemLabel}>{_.label}</span>
                        <SonaButton className={`${styles.demoScreen__listItemDuration}`}>
                          {_.duration}
                        </SonaButton>
                      </SonaButton>
                    </li>)
                }

                return (
                  <li key={idx} className={styles.demoScreen__listItem}>
                    <span className={styles.demoScreen__listItemLabel}>{_.label}</span>
                    <SonaButton className={`${styles.demoScreen__listItemDuration}`}>
                      {_.duration}
                    </SonaButton>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        {/* cases screen section */}
        <section className={styles.casesScreen}>
          <div className={styles.casesScreen__textBlock}>
            <h2 className={styles.demoScreen__title} style={{ textAlign: 'left', width: '100%' }}>
              Ask for the outcome. <br />
              Sona handles <br />
              the steps
            </h2>
          </div>
          <div className={styles.casesScreen__imgContainer}>
            <CasesBlock />
            {/* <Image src="/use_cases.png" alt="" width={610} height={369} /> */}
          </div>
          <div className={styles.casesScreen__bg}>
            <Image src="/cases_screen.png" alt="" width={1183} height={660} className={styles.casesScreen__img} />
          </div>
        </section>
        {/* context screen section */}
        <section className={styles.contextScreen}>
          <h2 className={styles.demoScreen__title} style={{ width: '100%' }}>
            Your context stays under<br />
            your control
          </h2>
          <ul className={styles.contextScreen__cards}>
            {CONTEXT_SCREEN_CARDS.map((_, idx) => {
              return (
                <ContextCard card={_} key={idx} />
              )
            })}
            <div className={styles.contextScreen__cardCoverEffect}>
            </div>
          </ul>
          <SonaButton className={styles.contextScreen__ctaButton}>
            <Image src="/sona_main_logo.png" alt="logo" width={22} height={22} unoptimized />
            Only the context required to process the request is sent
          </SonaButton>
        </section>
        {/* pricing section */}
        <section className={styles.pricingScreen}>
          <h2 className={styles.pricingScreen__title}>
            Start free
          </h2>
          <div className={styles.pricingScreen__textBlock}>
            <p className={styles.pricingScreen__subtitle}>Upgrade to Pro when you need more</p>
            <div className={styles.pricingScreen__text}>
              After signing up, every new user gets full access to all Sona features for the first 7 days <br />
              After that, they can continue on
              {' '}
              <SonaButton style={{ padding: '4px 6px', display: 'inline-flex', verticalAlign: 'middle', width: 'max-content' }} renderAsSpan>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.79297 4.56543C3.52832 4.56543 2.50977 3.54688 2.50977 2.28223C2.50977 1.01758 3.52832 -0.000976562 4.79297 -0.000976562C6.05762 -0.000976562 7.07617 1.01758 7.07617 2.28223C7.07617 3.54688 6.05762 4.56543 4.79297 4.56543ZM9.81738 4.56543C8.55273 4.56543 7.53418 3.54688 7.53418 2.28223C7.53418 1.01758 8.55273 -0.000976562 9.81738 -0.000976562C11.082 -0.000976562 12.1006 1.01758 12.1006 2.28223C12.1006 3.54688 11.082 4.56543 9.81738 4.56543ZM4.79297 3.46484C5.44238 3.46484 5.97559 2.93848 5.97559 2.28223C5.97559 1.63281 5.44238 1.09961 4.79297 1.09961C4.14355 1.09961 3.61035 1.63281 3.61035 2.28223C3.61035 2.93848 4.14355 3.46484 4.79297 3.46484ZM9.81738 3.46484C10.4736 3.46484 11 2.93848 11 2.28223C11 1.63281 10.4736 1.09961 9.81738 1.09961C9.16797 1.09961 8.63477 1.63281 8.63477 2.28223C8.63477 2.93848 9.16797 3.46484 9.81738 3.46484ZM2.28418 9.05664C1.02637 9.05664 0.000976562 8.03809 0.000976562 6.77344C0.000976562 5.50879 1.02637 4.49023 2.28418 4.49023C3.54883 4.49023 4.57422 5.50879 4.57422 6.77344C4.57422 8.03809 3.54883 9.05664 2.28418 9.05664ZM12.3262 9.05664C11.0615 9.05664 10.0361 8.03809 10.0361 6.77344C10.0361 5.50879 11.0615 4.49023 12.3262 4.49023C13.5908 4.49023 14.6094 5.50879 14.6094 6.77344C14.6094 8.03809 13.5908 9.05664 12.3262 9.05664ZM2.28418 7.95605C2.94043 7.95605 3.47363 7.42285 3.47363 6.77344C3.47363 6.11719 2.94043 5.59082 2.28418 5.59082C1.63477 5.59082 1.10156 6.11719 1.10156 6.77344C1.10156 7.42285 1.63477 7.95605 2.28418 7.95605ZM12.3262 7.95605C12.9756 7.95605 13.5088 7.42285 13.5088 6.77344C13.5088 6.11719 12.9756 5.59082 12.3262 5.59082C11.6699 5.59082 11.1367 6.11719 11.1367 6.77344C11.1367 7.42285 11.6699 7.95605 12.3262 7.95605ZM4.79297 13.5547C3.52832 13.5547 2.50977 12.5293 2.50977 11.2715C2.50977 10.0068 3.52832 8.98145 4.79297 8.98145C6.05762 8.98145 7.07617 10.0068 7.07617 11.2715C7.07617 12.5293 6.05762 13.5547 4.79297 13.5547ZM9.81738 13.5547C8.55273 13.5547 7.53418 12.5293 7.53418 11.2715C7.53418 10.0068 8.55273 8.98145 9.81738 8.98145C11.082 8.98145 12.1006 10.0068 12.1006 11.2715C12.1006 12.5293 11.082 13.5547 9.81738 13.5547ZM4.79297 12.4541C5.44238 12.4541 5.97559 11.9209 5.97559 11.2715C5.97559 10.6152 5.44238 10.082 4.79297 10.082C4.14355 10.082 3.61035 10.6152 3.61035 11.2715C3.61035 11.9209 4.14355 12.4541 4.79297 12.4541ZM9.81738 12.4541C10.4736 12.4541 11 11.9209 11 11.2715C11 10.6152 10.4736 10.082 9.81738 10.082C9.16797 10.082 8.63477 10.6152 8.63477 11.2715C8.63477 11.9209 9.16797 12.4541 9.81738 12.4541Z" fill="black" />
                </svg>
                Free
              </SonaButton>
              {' '}
              or upgrade to
              {' '}
              <SonaButton style={{ padding: '4px 6px', display: 'inline-flex', verticalAlign: 'middle', width: 'max-content' }} renderAsSpan>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.79297 4.56543C3.52832 4.56543 2.50977 3.54688 2.50977 2.28223C2.50977 1.01758 3.52832 -0.000976562 4.79297 -0.000976562C6.05762 -0.000976562 7.07617 1.01758 7.07617 2.28223C7.07617 3.54688 6.05762 4.56543 4.79297 4.56543ZM9.81738 4.56543C8.55273 4.56543 7.53418 3.54688 7.53418 2.28223C7.53418 1.01758 8.55273 -0.000976562 9.81738 -0.000976562C11.082 -0.000976562 12.1006 1.01758 12.1006 2.28223C12.1006 3.54688 11.082 4.56543 9.81738 4.56543ZM4.79297 3.46484C5.44238 3.46484 5.97559 2.93848 5.97559 2.28223C5.97559 1.63281 5.44238 1.09961 4.79297 1.09961C4.14355 1.09961 3.61035 1.63281 3.61035 2.28223C3.61035 2.93848 4.14355 3.46484 4.79297 3.46484ZM9.81738 3.46484C10.4736 3.46484 11 2.93848 11 2.28223C11 1.63281 10.4736 1.09961 9.81738 1.09961C9.16797 1.09961 8.63477 1.63281 8.63477 2.28223C8.63477 2.93848 9.16797 3.46484 9.81738 3.46484ZM2.28418 9.05664C1.02637 9.05664 0.000976562 8.03809 0.000976562 6.77344C0.000976562 5.50879 1.02637 4.49023 2.28418 4.49023C3.54883 4.49023 4.57422 5.50879 4.57422 6.77344C4.57422 8.03809 3.54883 9.05664 2.28418 9.05664ZM12.3262 9.05664C11.0615 9.05664 10.0361 8.03809 10.0361 6.77344C10.0361 5.50879 11.0615 4.49023 12.3262 4.49023C13.5908 4.49023 14.6094 5.50879 14.6094 6.77344C14.6094 8.03809 13.5908 9.05664 12.3262 9.05664ZM2.28418 7.95605C2.94043 7.95605 3.47363 7.42285 3.47363 6.77344C3.47363 6.11719 2.94043 5.59082 2.28418 5.59082C1.63477 5.59082 1.10156 6.11719 1.10156 6.77344C1.10156 7.42285 1.63477 7.95605 2.28418 7.95605ZM12.3262 7.95605C12.9756 7.95605 13.5088 7.42285 13.5088 6.77344C13.5088 6.11719 12.9756 5.59082 12.3262 5.59082C11.6699 5.59082 11.1367 6.11719 11.1367 6.77344C11.1367 7.42285 11.6699 7.95605 12.3262 7.95605ZM4.79297 13.5547C3.52832 13.5547 2.50977 12.5293 2.50977 11.2715C2.50977 10.0068 3.52832 8.98145 4.79297 8.98145C6.05762 8.98145 7.07617 10.0068 7.07617 11.2715C7.07617 12.5293 6.05762 13.5547 4.79297 13.5547ZM9.81738 13.5547C8.55273 13.5547 7.53418 12.5293 7.53418 11.2715C7.53418 10.0068 8.55273 8.98145 9.81738 8.98145C11.082 8.98145 12.1006 10.0068 12.1006 11.2715C12.1006 12.5293 11.082 13.5547 9.81738 13.5547ZM4.79297 12.4541C5.44238 12.4541 5.97559 11.9209 5.97559 11.2715C5.97559 10.6152 5.44238 10.082 4.79297 10.082C4.14355 10.082 3.61035 10.6152 3.61035 11.2715C3.61035 11.9209 4.14355 12.4541 4.79297 12.4541ZM9.81738 12.4541C10.4736 12.4541 11 11.9209 11 11.2715C11 10.6152 10.4736 10.082 9.81738 10.082C9.16797 10.082 8.63477 10.6152 8.63477 11.2715C8.63477 11.9209 9.16797 12.4541 9.81738 12.4541Z" fill="black" />
                </svg>
                Pro
              </SonaButton>
              {' '}
            </div>
          </div>
          <Pricing />
          <div className={styles.pricingScreen__oliveLeft}>
            <Image src='/olive_left.png' alt='logo' width={723} height={723} />
          </div>
          <div className={styles.pricingScreen__oliveRight}>
            <Image src='/olive_right.png' alt='logo' width={723} height={723} />
          </div>
        </section>
        {/* FAQ screen section */}
        <section className={styles.faqScreen}>
          <h2 className={styles.pricingScreen__title}>
            FAQ
          </h2>
          <Faq />
        </section>
        {/* footer section */}
        <footer className={styles.footer}>
          <div className={styles.footer__ctaBlock}>
            <h2 className={styles.pricingScreen__title}>
              Your personal voice agent
            </h2>
            <p className={styles.footer__subtitle}>
              Without having to explain everything all over again.
            </p>
            <div className={styles.footer__ctaCard}>
              <span>Start free with full access to every Sona feature<br />
                for your first 7 days.</span>
              <div>
                <SonaButton appearance='transparent' href='/'>
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.3047V1.27344C0 0.414062 0.507812 0 1.10938 0C1.375 0 1.64844 0.078125 1.91406 0.226562L11.1406 5.61719C11.8125 6.00781 12.0859 6.30469 12.0859 6.78906C12.0859 7.26562 11.8125 7.57031 11.1406 7.96094L1.91406 13.3438C1.64844 13.4922 1.375 13.5703 1.10938 13.5703C0.507812 13.5703 0 13.1562 0 12.3047Z" fill="currentColor" />
                  </svg>
                  Watch demo
                </SonaButton>
                <DownloadSona appearance="blue" />
              </div>
            </div>
            <span className={styles.footer__description}>
              Sona remembers your terminology, writing styles, projects, and decisions so it can help you write, search, analyze, and get work done by voice with the right context already in place.
            </span>
          </div>
          <aside className={styles.footer__aside}>
            <div className={styles.footer__menu}>
              <span className={styles.footer__asideText}>Voice OS</span>
              <FooterNavigation />
            </div>
            <span className={styles.footer__copyright}>&copy; {new Date().getFullYear()} Sona Voice OS</span>
          </aside>
        </footer>
      </main>
    </div >
  );
}
