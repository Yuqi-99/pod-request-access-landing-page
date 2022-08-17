// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import "@fontsource/chivo/300.css";
import "@fontsource/open-sans";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      bg: '#121725',
      txt: '#54E6AF',
      content: '#C2CBE5',
      emailHolder: '#2C344B',
      btnHover: '#B3FFE2'
    },
  },

  fonts:{
    heading: `'Chivo', sans-serif`,
    body: `'Chivo', sans-serif`,
  },

})

export default theme;