import { Pane, Text } from 'evergreen-ui'

export interface StatItemProps {
    /** headline stat value, e.g. "1200+" */
    value: string;
    /** short label shown under the value */
    label: string;
    /** brand color for the value */
    color: string;
}

/** StatItem is a single colored stat value with its label. */
const StatItem = ({ value, label, color }: StatItemProps) => (
    <Pane>
        <Text
            display="block"
            className="hoagie"
            fontSize={36}
            fontWeight={500}
            lineHeight="42px"
            color={color}
        >
            {value}
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

export default StatItem
