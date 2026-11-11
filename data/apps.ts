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
        description: 'Email every undergrad at once.',
        detail: 'Reache every residential college listserv. Send right away or schedule ahead and test in your own inbox first.',
        icon: EnvelopeIcon,
        screenshot: "/screenshots/mail.webp"
    },
    {
        name: 'meal',
        color: hoagieColors.meal,
        description: 'Every dining hall and cafe menu.',
        detail: 'Menus for every campus dining hall and cafe, food and drink, in one place.',
        icon: CutleryIcon,
        screenshot: '/screenshots/meal.webp'
    },
    {
        name: 'plan',
        color: hoagieColors.plan,
        description: 'Find courses and plan all four years.',
        detail: 'Explore courses, read reviews, upload your transcript and sync your schedule to Google Calendar.',
        icon: CalendarIcon,
        screenshot: '/screenshots/plan.webp'
    },
    {
        name: 'stuff',
        color: hoagieColors.stuff,
        description: 'Sales, lost and found, and more.',
        detail: 'All the stuff, in one place: student sales, lost and found, and beyond.',
        icon: BoxIcon,
        screenshot: '/screenshots/stuff.webp'
    },
    {
        name: 'help',
        color: hoagieColors.help,
        description: 'Ask academic questions, get answers.',
        detail: 'Campus academic questions, answered on one platform.',
        icon: ChatIcon,
        comingSoon: true,
    },
    {
        name: 'calendar',
        color: hoagieColors.calendar,
        description: 'Every campus event you care about.',
        detail: 'Keep up with the campus events you love.',
        icon: TimelineEventsIcon,
        comingSoon: true,
        screenshot: '/screenshots/calendar.webp'
    },
    {
        name: 'mealexchange',
        href: 'https://meal.exchange/',
        color: hoagieColors.mealExchange,
        description: 'Meal exchanges for clubs and halls.',
        detail: 'Set up meal exchanges, club to club and with the university.',
        icon: MealExchangeIcon,
        iconSize: 51,
        title: { base: 'meal', highlight: 'exchange' },
        byline: { base: 'by hoagie', highlight: 'club', color: hoagieColors.club },
        screenshot: '/screenshots/exchange.webp'
    },
    {
        name: 'club',
        color: hoagieColors.club,
        description: 'Join the team and build real apps.',
        detail: 'The students who design, build and keep every Hoagie app running.',
        icon: CodeIcon,
        screenshot: '/screenshots/club.webp'
    },
]