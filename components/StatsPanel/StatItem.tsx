import { Pane, Text } from 'evergreen-ui'
import CountUp from 'react-countup'

export interface StatItemProps {
    /** headline stat value, e.g. "1200+" */
    value: string;
    /** short label shown under the value */
    label: string;
    /** brand color for the value */
    color: string;
}

/** StatItem is a single colored stat value with its label.
 *  Numeric values count up quickly when scrolled into view. */
const StatItem = ({ value, label, color }: StatItemProps) => {
    const match = value.match(/^(\d+)(.*)$/)

    return (
        <Pane>
            <Text
                display="block"
                className="hoagie"
                fontSize={36}
                fontWeight={500}
                lineHeight="42px"
                color={color}
            >
                {match ? (
                    <CountUp
                        end={parseInt(match[1], 10)}
                        suffix={match[2]}
                        duration={0.7}
                        enableScrollSpy
                        scrollSpyOnce
                    />
                ) : (
                    value
                )}
            </Text>
            <Text
                display="block"
                fontSize={13}
                lineHeight="18px"
                color="gray800"
                marginTop={2}
            >
                {label}
            </Text>
        </Pane>
    )
}

export default StatItem
