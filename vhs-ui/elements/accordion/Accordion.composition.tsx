import React from 'react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'

import { AccordionStyleConfig } from './AccordionStyleConfig'

import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  Accordion as ChakraAccordion,
} from '@chakra-ui/react'

const typography = {
  fonts: {
    '*': 'Montserrat',
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
}

const theme = extendTheme({
  ...typography,
  colors: {
    black: '#000',
    blue: {
      100: '#B3DDFF',
    },
    brown: {
      200: '#B09C75',
      500: '#66513E',
    },
    gradients: {
      rainbow: 'linear-gradient(267.46deg, #563D6D 0%, #66513E 52.11%, #326373 100%)',
      blueGreen: 'linear-gradient(90deg, #5871B0 0%, #6CA3A4 100%)',
      greenEmerald: 'linear-gradient(90deg, #3D675D 0%, #395052 100%)',
      black: 'linear-gradient(90deg, #2A2E35 0%, #2B3037 6.25%, #41464D 100%)',
      orange: 'linear-gradient(90deg, #B7AB7C 0%, #BD5A22 100%)',
      purple: 'linear-gradient(90deg, #383082 0%, #7F4089 100%)',
      red: 'linear-gradient(90deg, #96464D 0%, #7D1A28 100%)',
    },
    gray: {
      300: '#57606C',
      1000: '#373A42',
      1100: '#22262D',
    },
    green: {
      300: '#326373',
      400: '#375B55',
      700: '#27b18a',
    },
    orange: {
      300: '#FFD4AE',
    },
    red: {
      300: '#F7BFC5',
    },
    purple: {
      300: '#CDB3FF',
      500: '#563D6D',
      700: '#5E3846',
    },
    white: {
      decorative: 'rgba(240, 248, 255, 0.12)',
      400: '#E4E4E4',
      700: '#F0F8FF',
    },
    yellow: {
      500: '#FEE912',
    },
  },
  components: {
    Accordion: AccordionStyleConfig,
  },
})

export const BasicAccordion = () => {
  const title = (
    <Flex justifyContent="center" flexDir={'column'} color="white" height={'96px'} ml="10px">
      <Box>Any Title</Box>
      <Box>Any Subtitle</Box>
    </Flex>
  )

  const content = (
    <Flex justifyContent="center" flexDir={'column'} color="white" ml="25px" height={'96px'}>
      <Box>Any Content</Box>
      <Box>Any Body</Box>
    </Flex>
  )

  const accordionCeption = (
    <ChakraAccordion allowMultiple>
      <Box>
        <AccordionItem titleContent={title} content={content} />
        <AccordionItem titleContent={title} content={content} />
      </Box>
    </ChakraAccordion>
  )

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      <ChakraProvider theme={theme}>
        <Box width={'400px'}>
          <Accordion>
            <AccordionItem titleContent={title} content={accordionCeption} />
          </Accordion>
        </Box>
      </ChakraProvider>
    </>
  )
}
