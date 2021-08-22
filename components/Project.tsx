import { Card, Pane, Text, EnvelopeIcon } from "evergreen-ui"
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
                    <Pane fontSize="18pt">
                        { isComingSoon && 
                            <Pane className={styles.status}>
                                Coming Soon
                            </Pane>
                        }
                        hoagie
                        <Text fontSize="18pt" display="inline" color={color} fontWeight="bold">
                            {name}
                        </Text>
                    </Pane>
                    <Pane
                        maxWidth="240px"
                        marginTop="3px"
                        fontSize="11pt"
                        fontWeight={200}
                        lineHeight="15px"
                        color="#545454"
                    >
                        {description}
                    </Pane>
                </Pane>
            </Card>
        </Link>
    )
}

export default Project