import { Overlay, Pane, Text } from 'evergreen-ui'
import { ElementType } from 'react'
import styles from './AppPreviewModal.module.css'

interface AppPreviewModalProps {
    /** app name, rendered as hoagie{name} */
    name: string;
    /** brand color for the border and logo accent */
    color: string;
    /** icon component rendered inside the colored logo block */
    icon: ElementType;
    /** screenshot of the app shown inside the popup */
    image: string;
    /** whether the popup is visible */
    isShown: boolean;
    /** called once the popup has closed (backdrop click or escape) */
    onClose: () => void;
}

/** AppPreviewModal shows a screenshot of a Hoagie app in a centered popup. */
const AppPreviewModal = ({
    name,
    color,
    icon,
    image,
    isShown,
    onClose,
}: AppPreviewModalProps) => {
    const Icon = icon
    return (
        <Overlay
            isShown={isShown}
            onExited={onClose}
            preventBodyScrolling
            containerProps={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Pane
                role="dialog"
                aria-label={`hoagie${name} preview`}
                className={styles.popup}
                style={{
                    background: `linear-gradient(180deg, ${color} 45%, #fff 75%)`,
                }}
            >
                <Pane className={styles.inner}>
                    <img
                        src={image}
                        alt={`Screenshot of hoagie${name}`}
                        className={styles.image}
                    />
                    <Pane className={styles.fade} />
                    <Pane className={styles.badge}>
                        <Pane className={styles.badgeIcon} style={{ background: color }}>
                            <Icon size={32} color="white" />
                        </Pane>
                        <Pane className={styles.badgeText}>
                            <Text
                                display="inline-block"
                                className="hoagie"
                                color="gray900"
                                fontWeight={600}
                                fontSize={38}
                                lineHeight={1}
                            >
                                hoagie
                            </Text>
                            <Text
                                display="inline-block"
                                className="hoagie"
                                color={color}
                                fontWeight={600}
                                fontSize={38}
                                lineHeight={1}
                            >
                                {name}
                            </Text>
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        </Overlay>
    )
}

export default AppPreviewModal
