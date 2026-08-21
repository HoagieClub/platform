import { Pane, majorScale } from 'evergreen-ui'
import Link from 'next/link'
import AppGrid from '../components/AppGrid'
import StatsPanel from '../components/StatsPanel'
import Doodle from '../components/Doodle'
import { apps } from '../data/apps'
import { stats } from '../data/stats'

// Decorative doodles scattered around the app card grid. Positions are
// approximate relative to the grid's edges (px offsets, not tied to card
// positions), tweak top/offset/width/rotate/startPx to taste. startPx staggers
// when each doodle starts gliding in (px of page scroll).
const doodles = [
    { src: '/icons/SmileyIcon.svg', side: 'left' as const, top: '-30px', offset: '-190px', width: 176, rotate: -8, startPx: 0 },
    { src: '/icons/EnvelopeIcon.svg', side: 'right' as const, top: '-20px', offset: '-150px', width: 159, rotate: 10, startPx: 5 },
    { src: '/icons/ChecklistIcon.svg', side: 'left' as const, top: '160px', offset: '-230px', width: 170, rotate: 6, startPx: 10 },
    { src: '/icons/TShirtIcon.svg', side: 'right' as const, top: '190px', offset: '-180px', width: 165, rotate: -7, startPx: 15 },
    { src: '/icons/MugIcon.svg', side: 'left' as const, top: '365px', offset: '-92px', width: 124, rotate: 11, startPx: 20 },
    { src: '/icons/QuestionMarkIcon.svg', side: 'right' as const, top: '390px', offset: '-60px', width: 124, rotate: -10, startPx: 25 },
]

export default function Index() {
    return (
        <Pane
            display="flex"
            justifyContent="center"
            marginX={majorScale(4)}
            paddingTop={majorScale(5)}
            paddingBottom={majorScale(6)}
        >
            <Pane width="100%" maxWidth={1160}>
                <Pane
                    is="h1"
                    margin={0}
                    marginBottom={48}
                    textAlign="center"
                    fontSize={25}
                    fontWeight={400}
                    lineHeight="36px"
                    color="gray900"
                >
                    Welcome <b>Hoagie</b>, Princeton&apos;s application system.
                </Pane>
                <Pane position="relative" zIndex={0}>
                    {doodles.map((doodle) => (
                        <Doodle key={doodle.src} {...doodle} />
                    ))}
                    <AppGrid apps={apps} />
                </Pane>
                <Pane
                    is="p"
                    marginX="auto"
                    marginTop={40}
                    marginBottom={0}
                    maxWidth={560}
                    textAlign="center"
                    fontSize={14}
                    lineHeight="21px"
                    color="gray800"
                >
                    <b>Hoagie Apps</b> are built and ran by Princeton students as
                    part of Hoagie Club.{' '}
                    <Link href="/FAQ">
                        Want to learn more about how we want to change the way our
                        campus applications work?
                    </Link>
                </Pane>
                <Pane marginTop={90}>
                    <StatsPanel
                        title={(
                            <>
                                Built by a handful of Princeton students.
                                <br />
                                Used by 90%+ of them.
                            </>
                        )}
                        stats={stats}
                    />
                </Pane>
            </Pane>
        </Pane>
    )
}
