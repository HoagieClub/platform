import {
    BoxIcon,
    CalendarIcon,
    ChatIcon,
    CodeIcon,
    EnvelopeIcon,
    TimelineEventsIcon,
} from 'evergreen-ui'
import { AppCardProps } from '../components/AppCard'
import CutleryIcon from '../components/icons/CutleryIcon'
import MealExchangeIcon from '../components/icons/MealExchangeIcon'
import { hoagieColors } from './colors'

/** All Hoagie apps shown on the landing page, in display order. */
export const apps: AppCardProps[] = [
    {
        name: 'mail',
        color: hoagieColors.mail,
        description: 'Send emails to all undergraduate students, instantly.',
        icon: EnvelopeIcon,
    },
    {
        name: 'meal',
        color: hoagieColors.meal,
        description: 'All menus for campus dining halls and cafes food and drink.',
        icon: CutleryIcon,
    },
    {
        name: 'plan',
        color: hoagieColors.plan,
        description: 'Explore courses, read reviews, and plan your four-year schedule.',
        icon: CalendarIcon,
    },
    {
        name: 'stuff',
        color: hoagieColors.stuff,
        description: 'All the stuff, in one place. From sales to lost & found, and beyond',
        icon: BoxIcon,
    },
    {
        name: 'help',
        color: hoagieColors.help,
        description: 'All campus academic questions answered on one platform.',
        icon: ChatIcon,
        comingSoon: true,
    },
    {
        name: 'calendar',
        color: hoagieColors.calendar,
        description: 'Keep up with the campus events that you love.',
        icon: TimelineEventsIcon,
        comingSoon: true,
    },
    {
        name: 'mealexchange',
        href: 'https://meal.exchange/',
        color: hoagieColors.mealExchange,
        description: 'Facilitate meal exchange, both club to club and university.',
        icon: MealExchangeIcon,
        iconSize: 51,
        title: { base: 'meal', highlight: 'exchange' },
        byline: { base: 'by hoagie', highlight: 'club', color: hoagieColors.club },
    },
    {
        name: 'club',
        color: hoagieColors.club,
        description: 'Join the Hoagie team and contribute to real projects.',
        icon: CodeIcon,
    },
]
