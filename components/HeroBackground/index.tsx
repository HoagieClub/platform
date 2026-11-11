import styles from './HeroBackground.module.css'

const HeroBackground = () => (
    <div className={styles.background} aria-hidden="true">
        <video
            className={styles.video}
            src="/shader.webm"
            autoPlay
            muted
            loop
            playsInline
        />
        <div className={styles.grain} />
    </div>
)

export default HeroBackground