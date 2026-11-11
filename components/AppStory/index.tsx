import { CSSProperties, useEffect, useRef, useState } from 'react'
import AppCard, { AppCardProps } from '../AppCard'
import styles from './AppStory.module.css'

interface AppStoryProps {
    /** same app list the cards use */
    apps: AppCardProps[];
}

/** id of each panel on the right, used by the rail */
const panelId = (step: number) => `story-${step}`

/** AppStory has a fixed left column (wordmark and text) next to a normally scrolling
 *  right column: first every app as a card, then one screenshot per app. Whichever
 *  panel is in the middle of the screen decides what the left column shows.
 *  On smaller screens it shows the "All" grid only, and AppSections covers each app. */
const AppStory = ({ apps }: AppStoryProps) => {
    const rootRef = useRef<HTMLDivElement>(null)
    // 0 is All, 1 to apps.length is an app
    const [active, setActive] = useState(0)
    // whether the story is on screen, so the rail only shows while it's useful
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const root = rootRef.current
        if (!root) return undefined
        const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-panel]'))

        // the panel crossing the middle of the screen is the active one
        const middle = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.panel))
                })
            },
            { rootMargin: '-50% 0px -50% 0px' },
        )
        // each panel animates in the first time a good part of it is visible
        const enter = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute('data-entered', 'true')
                        enter.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.25 },
        )
        const story = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))

        panels.forEach((panel) => {
            middle.observe(panel)
            enter.observe(panel)
        })
        story.observe(root)
        return () => {
            middle.disconnect()
            enter.disconnect()
            story.disconnect()
        }
    }, [apps])

    const jumpTo = (step: number) => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        document.getElementById(panelId(step))
            ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' })
    }

    const current = active > 0 ? apps[active - 1] : null
    const titleOf = (app: AppCardProps) => app.title ?? { base: 'hoagie', highlight: app.name }
    const steps = [
        { label: 'All', word: 'platform', color: '#6C47AE' },
        ...apps.map((app) => ({ label: titleOf(app).highlight, word: titleOf(app).highlight, color: app.color })),
    ]
    // "hoagie" for every app except mealexchange, where it's "meal"
    const firstWord = current ? titleOf(current).base : 'hoagie'

    return (
        <div
            ref={rootRef}
            className={styles.story}
            style={{
              '--tint': current
                  ? `color-mix(in srgb, ${current.color} 14%, white)`
                  : 'transparent',
          } as CSSProperties}
        >
            {/* LEFT: stays put while the right side scrolls */}
            <div className={styles.left}>
                <div className={styles.leftInner}>

                    <h1 className={styles.wordmark} aria-live="polite">
                        <span className={styles.window}>
                            {/* only the current word, so the box is exactly as wide as it */}
                            <span key={firstWord} className={styles.firstWord}>{firstWord}</span>
                        </span>
                        <span className={styles.window}>
                            <span className={styles.roll} style={{ transform: `translateY(${-1.25 * active}em)` }}>
                                {steps.map((step) => (
                                    <span key={step.label} className={styles.word} style={{ color: step.color }}>
                                        {step.word}
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>

                    {/* keyed, so it fades in fresh for each app */}
                    {current ? (
                        <div key={current.name} className={styles.details}>
                            <p className={styles.detail}>{current.detail}</p>

                            {current.comingSoon
                                ? <p className={styles.soon}>Coming soon</p>
                                : (
                                    <a href={current.href ?? `https://${current.name}.hoagie.io/`} className={styles.button}>
                                        Open {titleOf(current).base}{titleOf(current).highlight} ↗
                                    </a>
                                )}
                        </div>
                    ) : (
                        <div key="all">
                            <p className={styles.detail}>
                                The apps Princeton students use every day, designed, built and kept running by students.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* RIGHT: scrolls normally */}
            <div className={styles.right}>
                <section id={panelId(0)} data-panel={0} className={styles.panel} aria-label="All apps">
                    <ul className={`${styles.panelInner} ${styles.grid}`}>
                        {apps.map((app) => (
                            <li key={app.name}><AppCard {...app} /></li>
                        ))}
                    </ul>
                </section>

                {apps.map((app, index) => (
                    <section
                        key={app.name}
                        id={panelId(index + 1)}
                        data-panel={index + 1}
                        className={`${styles.panel} ${styles.appPanel}`}
                        aria-label={`${titleOf(app).base}${titleOf(app).highlight}`}
                    >
                        {/* phones only: the app's text sits with its screenshot,
                            since the left column doesn't stay put there */}
                        <div className={styles.panelText}>
                            <h2 className={styles.panelTitle}>
                                {titleOf(app).base}
                                <span style={{ color: app.color }}>{titleOf(app).highlight}</span>
                            </h2>
                            <p className={styles.detail}>{app.detail ?? app.description}</p>
                            {app.comingSoon
                                ? <p className={styles.soon}>Coming soon</p>
                                : (
                                    <a href={app.href ?? `https://${app.name}.hoagie.io/`} className={styles.button}>
                                        Open {titleOf(app).base}{titleOf(app).highlight} ↗
                                    </a>
                                )}
                        </div>

                        <div
                            className={`${styles.panelInner} ${styles.screenshot}`}
                            style={{ '--app-color': app.color } as CSSProperties}
                        >
                            {app.screenshot
                                ? <img src={app.screenshot} alt={`${titleOf(app).base}${titleOf(app).highlight} screenshot`} />
                                : (
                                    <span className={styles.placeholder} aria-hidden="true">
                                        <app.icon size={120} color={app.color} />
                                    </span>
                                )}
                        </div>
                    </section>
                ))}
            </div>

            {/* rail: All plus each app, shown while the story is on screen */}
            <nav aria-label="Apps" className={styles.rail} data-visible={inView}>
                <ul>
                    {steps.map((step, index) => (
                        <li key={step.label}>
                            <button
                                type="button"
                                className={styles.railLink}
                                aria-current={active === index ? 'true' : undefined}
                                aria-label={`Go to ${step.label}`}
                                onClick={() => jumpTo(index)}
                                style={{ '--app-color': step.color } as CSSProperties}
                            >
                                <span className={styles.railLabel}>{step.label}</span>
                                <span className={index === 0 ? styles.railSquare : styles.railDot} />
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default AppStory