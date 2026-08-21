import { StatItemProps } from '../components/StatsPanel/StatItem'
import { hoagieColors } from './colors'

/** Platform stats shown in the landing page banner, in display order. */
export const stats: StatItemProps[] = [
    {
        value: '5200',
        label: 'Princeton undergrads reached',
        color: hoagieColors.help,
    },
    {
        value: '1200+',
        label: 'emails sent this week',
        color: hoagieColors.mail,
    },
    {
        value: '340',
        label: 'listings on Stuff right now',
        color: hoagieColors.stuff,
    },
    {
        value: '5000+',
        label: 'courses and reviews',
        color: hoagieColors.plan,
    },
    {
        value: '800+',
        label: 'menu items',
        color: hoagieColors.meal,
    },
    {
        value: '50+',
        label: 'club members',
        color: hoagieColors.club,
    },
]
