import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { Pane, Button, majorScale, Spinner, LayoutAutoIcon, Text } from 'evergreen-ui'

export default function Index() {
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
      <Pane>
      <Pane display="flex" justifyContent="center" 
      alignItems="center"
      marginX={majorScale(1)}
      paddingBottom={majorScale(10)}
      paddingTop={majorScale(8)}
      >
        <Pane 
            borderRadius={20} 
            display="flex"
            alignItems="center"
            flexDirection="column"
            elevation={1} 
            background="white" 
            marginX={20} 
            maxWidth="800px" 
            width="100%"
            paddingX="10px"
            paddingTop={majorScale(5)}
            paddingBottom={majorScale(10)}
          >
            <LayoutAutoIcon size={100} color="#F58025"/>
            <Pane
                marginTop="30px"
                maxWidth="600px"
                width="100%"
                textAlign="center"
            >
              <Section title="Hoagie is the Princeton application platform." bold="Coming Fall 2021.">
                  <p>
                    Hoagie is more than just a couple of different campus applications; it is an integrated system. Every application is built with others in mind, filling different gaps in your campus experience. Hoagie Apps allow you to use the same profile accross the entire system, meaning you can do things like save your favorite courses in one application and then see them pop up on a different one instantly.
                  </p>
                  <p>
                    If you're interested in being part of creating this platform—the Hoagie <b>Club</b>—be on the lookout for recruitement emails early fall!
                  </p>
                  <Button disabled>Apply to Hoagie</Button>
              </Section>
              <Section title="How does this work?">
                The applications are all built from scratch, using shared UI elements, frameworks, and APIs. This allows all apps to get the latest updates all at the same time, show things like your set course schedule accross different applications, and just generally provide a better user experience. 
              </Section>
              <Section title="Why " bold="Hoagie?">
                In a world of Tiger[name], there was a need for something fresh. Hoagies represent many things—they represent how some in New Jersey call sandwiches. They also represent a certain iconic sandwich shop that has satisfied many Princetonian's late night cravings. In short, there's many things connecting Tigers to Hoagies, and Hoagie is embracing it to the fullest as we attempt to add a new word to Princeton's club names.
              </Section>
              <Section title="I wanna learn more!">
                More information will become available quite soon but if you'd like to connect now, feel free to email <b>hoagie@princeton</b>.
              </Section>
            </Pane>
        </Pane>
      </Pane>
      </Pane>
    );
}