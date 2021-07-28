import { ThemeProvider, defaultTheme } from "evergreen-ui"

function Everpurple(props) {
    let defTheme:any = defaultTheme
    const everPurple = {
      ...defTheme,
      components: {
        ...defTheme.components,
        // Button: {
        //   baseStyle: {
        //     color: 'white',
        //     paddingX: 12,
        //     paddingY: 8,
        //     borderRadius: 5,
        //     backgroundColor: '#e77500',
        //     _hover: {
        //       backgroundColor: '#f58025',
        //     },
        //     _active: {
        //       backgroundColor: '#f58025',
        //     },
        //     _focus: {
        //       boxShadow: '0 0 0 2px #f58025',
        //     },
        //   },
        // },
      },
    }
  
    return (
      <ThemeProvider value={everPurple}>
          {props.children}
      </ThemeProvider>
    )
  }

  export default Everpurple