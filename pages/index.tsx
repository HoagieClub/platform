import { Pane, majorScale } from 'evergreen-ui'
import Link from 'next/link'
import AppStory from '../components/AppStory'
import StatsPanel from '../components/StatsPanel'
import { apps } from '../data/apps'
import { stats } from '../data/stats'
import HeroBackground from '@/components/HeroBackground'

export default function Index() {
    return (
        <>
            <HeroBackground />

            <AppStory apps={apps} />
            
            <Pane
                position="relative"
                display="flex"
                justifyContent="center"
                marginX={majorScale(4)}
                paddingBottom={majorScale(6)}
            >
                <Pane width="100%" maxWidth={1160}>

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

                    <Pane
                        is="p"
                        marginX="auto"
                        marginTop={70}
                        marginBottom={0}
                        maxWidth={560}
                        textAlign="center"
                        fontSize={14}
                        lineHeight="21px"
                        color="gray800"
                    >
                        <b>Hoagie Apps</b> are built and run by Princeton students as
                        part of Hoagie Club.{' '}
                        <Link href="/FAQ">
                            Want to learn more about how we want to change the way our
                            campus applications work?
                        </Link>
                    </Pane>
                </Pane>
            </Pane>
        </>
    )
}