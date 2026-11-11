import Link from 'next/link'
import { CSSProperties, ElementType } from 'react'
import styles from './AppCard.module.css'

export interface AppCardTitle {
    /** black portion of the title */
    base: string;
    /** portion of the title accented with the app's brand color */
    highlight: string;
}

export interface AppCardByline extends AppCardTitle {
    /** color for the highlighted portion of the byline */
    color: string;
}

export interface AppCardProps {
    /** app name, rendered as hoagie{name} unless title is set */
    name: string;
    /** short description shown under the app title, about 35 characters */
    description: string;
    /** icon component, must accept size and color props */
    icon: ElementType;
    /** icon size in pixels, defaults to 40 */
    iconSize?: number;
    /** brand color for the frame, icon and title accent */
    color: string;
    /** link target, defaults to the app subdomain */
    href?: string;
    /** overrides the default "hoagie{name}" title, e.g. for co-branded apps */
    title?: AppCardTitle;
    /** small credit line under the title, e.g. "by hoagieclub" (not shown on the tile) */
    byline?: AppCardByline;
    /** disables the link and shows a coming soon label */
    comingSoon?: boolean;
    /** a sentence or two of extra detail, shown in the app story */
    detail?: string;
    /** path to a screenshot in /public, shown in the app story */
    screenshot?: string;
}

/** AppCard is the sticker style preview tile for a single Hoagie app. */
const AppCard = ({
    name,
    description,
    icon,
    iconSize = 40,
    color,
    href = `https://${name}.hoagie.io/`,
    title = { base: 'hoagie', highlight: name },
    comingSoon = false,
}: AppCardProps) => {
    const Icon = icon

    const tile = (
        <div
            className={styles.frame}
            style={{ '--tile-color': color } as CSSProperties}
            aria-disabled={comingSoon || undefined}
        >
            <div className={styles.inner}>
                <div className={styles.icon}>
                    <Icon size={iconSize} color={color} aria-hidden="true" />
                </div>
                <p className={styles.title}>
                    {title.base}
                    <span style={{ color }}>{title.highlight}</span>
                </p>
                <p className={styles.description}>{description}</p>
                {comingSoon && (
                    <span className={styles.ribbon} aria-hidden="true">
                        <span className={styles.ribbonText}>
                            COMING SOON&nbsp;&middot;&nbsp;COMING SOON&nbsp;&middot;&nbsp;COMING SOON&nbsp;&middot;&nbsp;COMING SOON&nbsp;&middot;&nbsp;
                        </span>
                    </span>
                )}
            </div>
        </div>
    )

    return comingSoon
        ? tile
        : <Link href={href} className={styles.link}>{tile}</Link>
}

export default AppCard