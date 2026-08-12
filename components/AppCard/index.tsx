import { Card, Pane, Text, Paragraph, ChevronRightIcon } from 'evergreen-ui'
import Link from 'next/link'
import { ElementType, MouseEvent, useState } from 'react'
import AppPreviewModal from '../AppPreviewModal'
import styles from './AppCard.module.css'

export interface AppCardProps {
    /** app name, rendered as hoagie{name} */
    name: string;
    /** short description shown under the app title */
    description: string;
    /** icon component rendered inside the colored block */
    icon: ElementType;
    /** brand color for the icon block and title accent */
    color: string;
    /** link target, defaults to the app subdomain */
    href?: string;
    /** screenshot shown in a popup when Preview is clicked */
    previewImage?: string;
}

/** AppCard is a linked preview card for a single Hoagie app. */
const AppCard = ({
    name,
    description,
    icon,
    color,
    href = `https://${name}.hoagie.io/`,
    previewImage,
}: AppCardProps) => {
    const Icon = icon
    const [isPreviewShown, setIsPreviewShown] = useState(false)

    const openPreview = (event: MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        setIsPreviewShown(true)
    }

    return (
        <>
            <Link href={href}>
                <Card
                    background="white"
                    display="flex"
                    width="100%"
                    maxWidth={370}
                    minHeight={120}
                    borderRadius={10}
                    cursor="pointer"
                    elevation={1}
                    position="relative"
                    className={styles.card}
                >
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
                        <Icon size={35} color="white" />
                    </Pane>
                    <Pane
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        paddingX={20}
                        paddingY={16}
                    >
                        <Pane marginBottom={8}>
                            <Text
                                display="inline-block"
                                className="hoagie"
                                color="gray900"
                                fontWeight={600}
                                fontSize={22}
                            >
                                hoagie
                            </Text>
                            <Text
                                display="inline-block"
                                className="hoagie"
                                color={color}
                                fontWeight={600}
                                fontSize={22}
                            >
                                {name}
                            </Text>
                        </Pane>
                        <Paragraph
                            size={400}
                            fontWeight={300}
                            color="gray700"
                            lineHeight="18px"
                        >
                            {description}
                        </Paragraph>
                    </Pane>
                    <Pane
                        position="absolute"
                        top={10}
                        right={12}
                        display="flex"
                        alignItems="center"
                        onClick={previewImage ? openPreview : undefined}
                        className={previewImage ? styles.preview : undefined}
                    >
                        <Text fontSize={11} fontWeight={500} color="#595959">
                            Preview
                        </Text>
                        <ChevronRightIcon size={12} color="#595959" />
                    </Pane>
                </Card>
            </Link>
            {previewImage && (
                <AppPreviewModal
                    name={name}
                    color={color}
                    icon={icon}
                    image={previewImage}
                    isShown={isPreviewShown}
                    onClose={() => setIsPreviewShown(false)}
                />
            )}
        </>
    )
}

export default AppCard
