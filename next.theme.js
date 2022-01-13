import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },

  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `Poppins, ${base.fonts?.body}`,
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none' },
        fontWeight: '400',
      },
    },

    Input: {
      baseStyle: {
        _focus: { boxShadow: 'none' },
      },
      size: {
        deez: '48px',
      },
    },
  },
  styles: {
    global: {
      'html, body': {},
    },
  },
})

export default theme
