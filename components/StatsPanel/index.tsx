import { ReactNode } from 'react'
import { Pane } from 'evergreen-ui'
import HoagieMascot from '../HoagieMascot'
import StatItem, { StatItemProps } from './StatItem'
import styles from './StatsPanel.module.css'

interface StatsPanelProps {
    /** panel headline */
    title: ReactNode;
    /** stats to display in the grid, in order */
    stats: StatItemProps[];
    /** headline color */
    titleColor?: string;
    /** show the mascot on the bottom-left edge */
    showMascot?: boolean;
}

/** StatsPanel is a rounded banner with a headline and a grid of
 *  colored stats, with the Hoagie mascot peeking over its edge. */
const StatsPanel = ({
    title,
    stats,
    titleColor = '#6C47AE',
    showMascot = true,
}: StatsPanelProps) => (
    <Pane position="relative" width="100%" maxWidth={950} marginX="auto">
        <Pane
            background="linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)"
            borderRadius={40}
            paddingTop={56}
            paddingBottom={64}
            paddingX={32}
            textAlign="center"
        >
            <Pane
                is="h2"
                className="hoagie"
                margin={0}
                fontSize={28}
                fontWeight={700}
                lineHeight="40px"
                color={titleColor}
            >
                {title}
            </Pane>
            <Pane className={styles.grid} marginTop={36}>
                {stats.map((stat) => (
                    <StatItem key={stat.label} {...stat} />
                ))}
            </Pane>
        </Pane>
        {showMascot && (
            <Pane className={styles.mascot}>
                <HoagieMascot width={140} />
            </Pane>
        )}
    </Pane>
)

export default StatsPanel
