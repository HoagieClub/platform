import { Pane } from 'evergreen-ui'
import AppCard, { AppCardProps } from '../AppCard'
import styles from './AppGrid.module.css'

interface AppGridProps {
    /** app card configs to display, in order */
    apps: AppCardProps[];
}

/** AppGrid lays out AppCards in a centered, wrapping grid. */
const AppGrid = ({ apps }: AppGridProps) => (
    <Pane className={styles.grid}>
        {apps.map((app) => (
            <AppCard key={app.name} {...app} />
        ))}
    </Pane>
)

export default AppGrid
