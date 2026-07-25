import Project from '../components/Project'
import Doodle from '../components/Doodle'
import { Pane, majorScale, EnvelopeIcon, BoxIcon, CodeIcon, CalendarIcon, Code } from 'evergreen-ui'
import Link from 'next/link'

const platformStats = [
  { value: '5200', label: 'Princeton undergrads reached', color: '#F04B4B' },
  { value: '1200+', label: 'emails sent this week', color: '#F28A00' },
  { value: '340', label: 'listings on Stuff right now', color: '#3B6DFF' },
  { value: '5000+', label: 'courses and reviews', color: '#F2A900' },
  { value: '800+', label: 'menu items', color: '#0A8A00' },
  { value: '50+', label: 'club members', color: '#6C47AE' },
]

// Decorative doodles scattered around the project card grid. Positions are
// approximate relative to the grid's edges (px offsets, not tied to card
// positions), tweak top/offset/width/rotate/startPx to taste. startPx staggers
// when each doodle starts gliding in (px of page scroll).
const doodles = [
  { src: '/doodles/SmileyIcon.svg', side: 'left' as const, top: '-65px', offset: '-160px', width: 176, rotate: -8, startPx: 0 },
  { src: '/doodles/EnvelopeIcon.svg', side: 'left' as const, top: '70px', offset: '-320px', width: 220, rotate: 10, startPx: 10 },
  { src: '/doodles/ChecklistIcon.svg', side: 'left' as const, top: '280px', offset: '-92px', width: 124, rotate: 11, startPx: 20 },
  { src: '/doodles/TShirtIcon.svg', side: 'right' as const, top: '100px', offset: '-300px', width: 220, rotate: -7, startPx: 10 },
  { src: '/doodles/MugIcon.svg', side: 'right' as const, top: '280px', offset: '-92px', width: 124, rotate: -11, startPx: 20 },
  { src: '/doodles/QuestionMarkIcon.svg', side: 'right' as const, top: '-65px', offset: '-150px', width: 124, rotate: 30, startPx: 0 },
]

export default function Index() {
    const Section = (props) => (
      <Pane>
        <Pane
          fontSize="22pt"
          lineHeight="40px"
          marginTop="10px"
        >
          {props.title} <b>{props.bold}</b>
        </Pane>
        <Pane>
            <Pane 
            textAlign="left"
            marginTop="30px"
            marginBottom="40px"
            fontSize="15pt"
            >
              {props.children}
          </Pane>
        </Pane>
      </Pane>

    )

    return (
      <Pane>
      <Pane display="flex" justifyContent="center" 
      alignItems="center"
      marginX={majorScale(4)}
      paddingBottom={majorScale(10)}
      paddingTop={majorScale(8)}
      >
        <Pane 
          width="100%" 
          maxWidth="820px"
        >
        <Pane
          fontSize="16pt"
          marginBottom="40px"
        >
          Welcome to <b>Hoagie</b>, the Princeton application system.
        </Pane>
        <Pane position="relative" zIndex={0}>
          {doodles.map((doodle) => (
            <Doodle key={doodle.src} {...doodle} />
          ))}
          <Pane className="projects">
            <Project
              name="mail"
              color="#E77500"
              description="Send emails to all undergraduate students, instantly."
              icon={EnvelopeIcon}
            />
            <Project
              name="meal"
              color="#008000"
              description="All menus for campus dining halls and cafes food and drink."
              icon="/MealIcon.svg"
              isNew = {true}
            />
            <Project
              name="plan"
              color="#FFB020"
              description="Explore courses, read reviews, and plan your four-year schedule."
              icon={CalendarIcon}
            />
            <Project
              name="stuff"
              color="#3366FF"
              description="All the stuff, in one place. From sales to lost & found, and beyond."
              icon={BoxIcon}
            />
            <Project
              name="club"
              color="#6C47AE"
              description="Join the Hoagie team and contribute to real development projects."
              icon={CodeIcon}
            />
          </Pane>
        </Pane>
        <Pane
          fontSize="16pt"
          marginTop="40px"
        >
          <p>
            Hoagie Platform and its Apps are built and ran by Princeton students as part of Hoagie Club.  Want to learn more about how we want to change the way our campus applications work?<br />
          </p>
          <p>
            <b><u><Link href='/FAQ'>Read the FAQ here</Link></u></b>.
          </p>
        </Pane>
        <Pane className="platform-stats-section">
          <Pane className="platform-stats-panel">
            <Pane className="platform-stats-mascot" aria-hidden="true">
              <img
                className="platform-stats-mascot-icon"
                src="/HoagieIcon.svg"
                alt=""
              />
              <img
                className="platform-stats-mascot-arm"
                src="/HoagieArmIcon.svg"
                alt=""
              />
            </Pane>
            <Pane className="platform-stats-copy">
              <Pane className="platform-stats-title">
                Built by a handful of Princeton students.
                <br />
                Used by 90%+ of them.
              </Pane>
              <Pane className="platform-stats-grid">
                {platformStats.map((stat) => (
                  <Pane key={stat.label} className="platform-stat">
                    <Pane className="platform-stat__value" style={{ color: stat.color }}>
                      {stat.value}
                    </Pane>
                    <Pane className="platform-stat__label">
                      {stat.label}
                    </Pane>
                  </Pane>
                ))}
              </Pane>
            </Pane>
          </Pane>
        </Pane>
        </Pane>
      </Pane>
      </Pane>
    );
}