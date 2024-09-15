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
    isNew?: boolean;
}

const Project = ({
    name,
    description,
    icon,
    color='hoagie-orange',
    isComingSoon = false,
    isDisabled = false,
    isNew = false,
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
                        {isNew && <Text
                            display="inline-block"
                            className="hoagie"
                            style={{
                              backgroundImage: `linear-gradient(
                                90deg,
                                hsl(0deg 73% 75%) 0%,
                                hsl(12deg 94% 76%) 19%,
                                hsl(22deg 100% 75%) 27%,
                                hsl(33deg 100% 74%) 34%,
                                hsl(44deg 82% 72%) 41%,
                                hsl(69deg 51% 70%) 47%,
                                hsl(107deg 44% 75%) 53%,
                                hsl(149deg 45% 73%) 59%,
                                hsl(175deg 52% 64%) 66%,
                                hsl(190deg 77% 57%) 73%,
                                hsl(201deg 97% 62%) 81%,
                                hsl(225deg 100% 76%) 100%
                              )`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              fontWeight: 600,
                              fontSize: 22,
                              paddingLeft: '5px'
                            }}
                        >
                            {"(new!)"}
                        </Text>}
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