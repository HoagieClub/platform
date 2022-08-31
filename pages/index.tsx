import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import Project from '../components/Project'
import { Pane, majorScale, EnvelopeIcon, BoxIcon, CodeIcon, AnnotationIcon, Code } from 'evergreen-ui'
import Link from 'next/link'


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
        <Pane className="projects">
          <Project
            name="mail"
            color="#E77500"
            description="Send emails to all undergraduate students, instantly."
            icon={EnvelopeIcon}
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
          <Project
            name="menus"
            color="#6C47AE"
            description="Get the latest information from all campus cafeterias."
            icon={AnnotationIcon}
            isComingSoon
          />
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
        </Pane>
      </Pane>
      </Pane>
    );
}