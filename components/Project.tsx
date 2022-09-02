import { Card, Pane, Text, EnvelopeIcon, Paragraph } from "evergreen-ui"
import Link from "next/link";
import styles from './Project.module.css'

interface ProjectProps {
    name: string;
    description: string;
    icon: (typeof EnvelopeIcon);
    color?: string;
    isDisabled?: boolean;
    isComingSoon?: boolean;
}

const Project = ({
    name,
    description,
    icon,
    color='hoagie-orange',
    isComingSoon = false,
    isDisabled = false,
    }:ProjectProps) => {
    const Icon = icon;
    isDisabled = isDisabled || isComingSoon;
    color = isDisabled ? "#686868" : color;

    // colors that change in disabled state 
    const black = isDisabled ? "#686868" : "black";
    const white = isDisabled ? "gray100" : "white";
    const disabledClass = isDisabled ? styles.disabled : '';
    return (
        <Link href={`https://${name}.hoagie.io/`}>
            <Card 
                background={white}
                display="flex"
                width="100%"
                height="120px"
                borderRadius={10}
                cursor={isDisabled ? "default" : "pointer"}
                elevation={1}
                className={`${styles.card} ${disabledClass} project`}
                minWidth="360px"
            >
                <Pane
                    background={color}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="90px"
                    height="100%"
                    borderTopLeftRadius={10}
                    borderBottomLeftRadius={10}
                >
                    <Icon size={35} color={white} />
                </Pane>
                <Pane 
                    display="flex" 
                    flexDirection="column" 
                    justifyContent="center"
                    paddingX={20}
                    color={black}
                >
                    <Pane marginBottom={8}>
                        { isComingSoon && 
                            <Pane className={styles.status} marginBottom={8}>
                                Coming Soon
                            </Pane>
                        }
                        <Text
                            display="inline-block"
                            className="hoagie"
                            color="grey900"
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
                        >{name}
                        </Text>
                    </Pane>
                    <Pane
                        maxWidth="240px"
                    >
                        <Paragraph
                            size={400}
                            fontWeight={300}
                            color="grey700"
                            lineHeight="18px"
                        >
                            {description}
                        </Paragraph>
                    </Pane>
                </Pane>
            </Card>
        </Link>
    )
}

export default Project