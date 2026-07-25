import { useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import styles from './Doodle.module.css'

const SLIDE_DISTANCE = 80
// Pixels of page scroll it takes for a doodle to fully glide into place.
const SCROLL_RANGE = 140

interface DoodleProps {
    src: string;
    top: string;
    side: 'left' | 'right';
    offset: string;
    width: number;
    rotate?: number;
    // Page scrollY (px) at which this doodle starts entering, for stagger.
    startPx?: number;
}

const Doodle = ({ src, top, side, offset, width, rotate = 0, startPx = 0 }: DoodleProps) => {
    const shouldReduceMotion = useReducedMotion();
    const [locked, setLocked] = useState(false);

    // Tracked against raw page scroll distance (not this element's own
    // viewport position) so it reliably needs real scrolling to complete,
    // even though the grid itself sits close to the top of the page.
    const { scrollY } = useScroll();
    const progress = useTransform(scrollY, [startPx, startPx + SCROLL_RANGE], [0, 1], {
        clamp: true,
    });

    // Once fully scrolled into place, latch there permanently so scrolling
    // back up never un-plays the animation.
    useMotionValueEvent(progress, 'change', (latest) => {
        if (latest >= 1 && !locked) {
            setLocked(true);
        }
    });

    const distance = side === 'left' ? -SLIDE_DISTANCE : SLIDE_DISTANCE;
    const scrubX = useTransform(progress, [0, 1], [distance, 0]);
    const scrubOpacity = useTransform(progress, [0, 1], [0, 1]);

    const x = shouldReduceMotion || locked ? 0 : scrubX;
    const opacity = shouldReduceMotion || locked ? 1 : scrubOpacity;

    return (
        <div
            className={styles.doodleWrap}
            style={{ top, [side]: offset, width }}
        >
            <motion.img
                src={src}
                alt=""
                aria-hidden="true"
                className={styles.doodleImg}
                style={{ rotate, x, opacity }}
            />
        </div>
    );
};

export default Doodle
