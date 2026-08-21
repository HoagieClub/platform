import {
    BriefcaseIcon,
    CalendarIcon,
    ChatIcon,
    CodeIcon,
    EnvelopeIcon,
    TimelineEventsIcon,
} from 'evergreen-ui'
import { AppCardProps } from '../components/AppCard'
import CutleryIcon from '../components/icons/CutleryIcon'
import { hoagieColors } from './colors'

/** All Hoagie apps shown on the landing page, in display order. */
export const apps: AppCardProps[] = [
    {
        name: 'mail',
        color: hoagieColors.mail,
        description: 'Send emails to all undergraduate students, instantly.',
        icon: EnvelopeIcon,
        previewImage: '/mail-preview.png',
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
        icon: BriefcaseIcon,
    },
    {
        name: 'help',
        color: hoagieColors.help,
        description: 'All campus academic questions answered on one platform.',
        icon: ChatIcon,
    },
    {
        name: 'calendar',
        color: hoagieColors.calendar,
        description: 'Join the Hoagie team and contribute to real development projects.',
        icon: TimelineEventsIcon,
    },
    {
        name: 'club',
        color: hoagieColors.club,
        description: 'Join the Hoagie team and contribute to real development projects.',
        icon: CodeIcon,
    },
]
