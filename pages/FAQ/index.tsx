import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import { Pane, Button, majorScale, LayoutAutoIcon } from 'evergreen-ui'


export default function FAQ() {
  const { user, error, isLoading } = useUser();

  const router = useRouter()
  useEffect(() => {
      const queryParams = new URLSearchParams(location.search)

      if (queryParams.has('code')) {
        queryParams.delete('code')
        queryParams.delete('state')
        // TODO: add support for other params to persist using 
        // queryParam.toString() or remove the queryParams method
        router.replace("/", undefined, { shallow: true })
      }
    }, [])

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
        </Pane>
        <Pane 
            borderRadius={20} 
            display="flex"
            alignItems="center"
            flexDirection="column"
            elevation={1} 
            background="white" 
            marginX={20} 
            maxWidth="820px" 
            width="100%"
            paddingX="10px"
            paddingTop={majorScale(5)}
            paddingBottom={majorScale(10)}
          >
            <LayoutAutoIcon size={100} color="hoagie-orange"/>
            <Pane
                marginTop="30px"
                maxWidth="600px"
                width="100%"
                textAlign="center"
            >
              <Section title="Hoagie is the Princeton application platform.">
                  <p>
                    Hoagie is more than just a couple of different campus applications; it is an integrated system. Every application is built with others in mind, filling different gaps in your campus experience. Hoagie Apps allow you to use the same profile across the entire system, meaning you can do things like save your favorite courses in one application and then see them pop up on a different one instantly.
                  </p>
                  <p>
                    If you're interested in being part of the team creating this platform—the Hoagie <b>Club</b>—click the button below to sign up for updates about how to do that!
                  </p>
                  <a target="_blank" href="https://tally.so/r/mVzojm"><Button size="large">Sign up for Fall Recruitment Updates</Button></a>
              </Section>
              <Section title="How does this work?">
                The applications are all built from scratch, using shared UI elements, frameworks, and APIs. We also aim to have a defined tech stack, development practices, and guides, simulating the work style of real tech companies. Hoagie's applications being built for one another has its benefits: all apps can get the latest updates at the same time, show things like your set course schedule across different applications, and just generally provide a better user experience. 
              </Section>
              <Section title="Why " bold="Hoagie?">
                In a world of Tiger[name], there was a need for something fresh. Hoagies represent many things—they represent how some in New Jersey call sandwiches. They also represent a certain iconic sandwich shop that has satisfied many Princetonian's late-night cravings. In short, many things connect Tigers to Hoagies, and Hoagie is embracing that to the fullest as we attempt to add a new word to Princeton's club names.
              </Section>
              <Section title="What is the goal of Hoagie?">
                Hoagie's goal is to make our campus applications better by reducing redundancies and isolation between their codebases and design. Through doing so, we hope to create a better developer and software engineering culture on campus—one that goes <b>beyond</b> a semester of COS 333. That's why we do our best to create design and development guidelines for the work we do.
              </Section>
              <Section title="Are Hoagie Apps the same as COS 333 projects?">
                <p>
                  For the most part, no! Beyond everything mentioned above, Hoagie also avoids many constraints of a COS 333 project—we get to work on larger (and smaller) projects, create and use project templates and a lot of ready-made corporate tools and APIs—all of which might not be "optimal" for a good grade in a class like COS 333. Finally, unlike class projects, we get to piggyback off one another's work to the fullest, which allows us to develop and deploy applications much quicker than someone starting from scratch.
                </p>
                <p>
                  Also, our projects aren't only for COS majors :)
                </p>
              </Section>
              <Section title="I wanna learn more!">
                More information will become available quite soon but if you'd like to connect now, feel free to email <b>hoagie@princeton</b>.
              </Section>
              <Link href="/">
                <Button size="large" appearance="primary">Back to the Platform</Button>
              </Link>
            </Pane>
        </Pane>
      </Pane>
      </Pane>
    );
}