import { Pane, majorScale } from 'evergreen-ui'
import Link from 'next/link'
import AppGrid from '../components/AppGrid'
import StatsPanel from '../components/StatsPanel'
import { apps } from '../data/apps'
import { stats } from '../data/stats'

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
                <AppGrid apps={apps} />
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
