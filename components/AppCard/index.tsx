import { Card, Pane, Text, Paragraph } from 'evergreen-ui'
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
    /** short description shown under the app title */
    description: string;
    /** icon component rendered inside the colored block */
    icon: ElementType;
    /** icon size in pixels, defaults to 35 */
    iconSize?: number;
    /** brand color for the icon block and title accent */
    color: string;
    /** link target, defaults to the app subdomain */
    href?: string;
    /** overrides the default "hoagie{name}" title, e.g. for co-branded apps */
    title?: AppCardTitle;
    /** small credit line under the title, e.g. "by hoagieclub" */
    byline?: AppCardByline;
    /** shows an animated coming-soon ribbon on hover */
    comingSoon?: boolean;
}

/** AppCard is a preview card for a single Hoagie app. */
const AppCard = ({
    name,
    description,
    icon,
    iconSize = 35,
    color,
    href = `https://${name}.hoagie.io/`,
    title = { base: 'hoagie', highlight: name },
    byline,
    comingSoon = false,
}: AppCardProps) => {
    const Icon = icon

    const card = (
            <Card
                background="white"
                display="flex"
                width="100%"
                maxWidth={370}
                height={130}
                minHeight={130}
                borderRadius={10}
                cursor={comingSoon ? 'default' : 'pointer'}
                elevation={1}
                position="relative"
                className={styles.card}
                style={{ '--card-color': color } as CSSProperties}
            >
                {comingSoon && (
                    <span className={styles.ribbon} aria-hidden="true">
                        <span className={styles.ribbonText}>
                                COMING SOON&nbsp;&middot;&nbsp;COMING SOON&nbsp;&middot;&nbsp;COMING SOON&nbsp;&middot;&nbsp;COMING SOON&nbsp;&middot;&nbsp;
                        </span>
                    </span>
                )}
                <Pane
                    background={color}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={90}
                    flexShrink={0}
                    borderTopLeftRadius={10}
                    borderBottomLeftRadius={10}
                >
                    <Icon size={iconSize} color="white" />
                </Pane>
                <Pane
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    minWidth={0}
                    flex={1}
                    paddingX={20}
                    paddingY={20}
                >
                    <Pane marginBottom={byline ? 0 : 8}>
                        <Text
                            display="inline-block"
                            className="hoagie"
                            color="gray900"
                            fontWeight={600}
                            fontSize={22}
                        >
                            {title.base}
                        </Text>
                        <Text
                            display="inline-block"
                            className="hoagie"
                            color={color}
                            fontWeight={600}
                            fontSize={22}
                        >
                            {title.highlight}
                        </Text>
                    </Pane>
                    {byline && (
                        <Pane className={styles.byline} marginBottom={4}>
                            <Text
                                display="inline-block"
                                color="gray900"
                                fontWeight={600}
                                fontSize={14}
                            >
                                {byline.base}
                            </Text>
                            <Text
                                display="inline-block"
                                color={byline.color}
                                fontWeight={600}
                                fontSize={14}
                            >
                                {byline.highlight}
                            </Text>
                        </Pane>
                    )}
                    <Paragraph
                        className={styles.description}
                    >
                        {description}
                    </Paragraph>
                </Pane>
            </Card>
    )

    return comingSoon ? card : <Link href={href}>{card}</Link>
}

export default AppCard
