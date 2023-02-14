import React from 'react'
import { ChakraProvider, extendTheme, Flex, Box, SimpleGrid } from '@chakra-ui/react'

import Badge from './Badge'
import { BadgeStyleConfig } from './BadgeStyleConfig'

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
    },
    green: {
      300: '#326373',
      400: '#375B55',
      700: '#27b18a',
    },
    indigo: {
      600: '#4E47CC',
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
  components: { Badge: BadgeStyleConfig },
})

export const BasicBadge = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      <ChakraProvider theme={theme}>
        <SimpleGrid
          columns={2}
          spacing="24px"
          width="240px"
          mt="10px"
          background="#1F1F1F"
          p="40px"
        >
          <Badge variant="gradientBlueGreen">Soon</Badge>
          <Badge variant="yellow" width="38px">
            1st
          </Badge>
          <Badge variant="gradientGreenEmerald">Live</Badge>
          <Badge variant="white" width="43px">
            2nd
          </Badge>
          <Badge variant="gradientBlack">Sold</Badge>
          <Badge variant="brownLight" width="43px">
            3rd
          </Badge>
          <Badge variant="gradientOrange">Replay</Badge>
          <Badge width="43px">4th</Badge>
          <Badge variant="gradientPurple">In Stud</Badge>
          <Badge variant="indigo" width="43px">
            Paid
          </Badge>

          <Badge variant="gradientRed">Closed</Badge>
        </SimpleGrid>
        <Box width="486px" mt="10px" background="#1F1F1F" px="40px">
          {/* default */}
          <Flex py="20px">
            <Badge>Defaults to auto width to handle longer or shorter text</Badge>
          </Flex>

          {/* gradientRainbow */}
          <Flex py="20px">
            <Badge size="lg" variant="gradientRainbow">
              CUSTOM*
            </Badge>
          </Flex>

          {/* purple */}
          <Flex justifyContent="space-between" py="20px">
            <Badge size="lg" variant="purple">
              Class I
            </Badge>
            <Badge size="sm" variant="purple">
              80
            </Badge>
            <Badge size="xs" variant="purple">
              I
            </Badge>
            <Badge size="md" variant="purple">
              1620
            </Badge>
            <Badge size="md" variant="purple">
              9000
            </Badge>
          </Flex>

          {/* purpleDark */}
          <Flex justifyContent="space-between" py="20px">
            <Badge size="lg" variant="purpleDark">
              Class II
            </Badge>
            <Badge size="sm" variant="purpleDark">
              60
            </Badge>
            <Badge size="xs" variant="purpleDark">
              II
            </Badge>
            <Badge size="md" variant="purpleDark">
              1560
            </Badge>
            <Badge size="md" variant="purpleDark">
              1669
            </Badge>
          </Flex>

          {/* brown */}
          <Flex justifyContent="space-between" py="20px">
            <Badge size="lg" variant="brown">
              Class III
            </Badge>
            <Badge size="sm" variant="brown">
              40
            </Badge>
            <Badge size="xs" variant="brown">
              III
            </Badge>
            <Badge size="md" variant="brown">
              1500
            </Badge>
            <Badge size="md" variant="brown">
              1559
            </Badge>
          </Flex>

          {/* green */}
          <Flex justifyContent="space-between" py="20px">
            <Badge size="lg" variant="green">
              Class IV
            </Badge>
            <Badge size="sm" variant="green">
              20
            </Badge>
            <Badge size="xs" variant="green">
              IV
            </Badge>
            <Badge size="md" variant="green">
              1440
            </Badge>
            <Badge size="md" variant="green">
              1449
            </Badge>
          </Flex>

          {/* greenLight */}
          <Flex justifyContent="space-between" py="20px">
            <Badge size="lg" variant="greenLight">
              Class V
            </Badge>
            <Badge size="sm" variant="greenLight">
              0
            </Badge>
            <Badge size="xs" variant="greenLight">
              V
            </Badge>
            <Badge size="md" variant="greenLight">
              1380
            </Badge>
            <Badge size="md" variant="greenLight">
              1439
            </Badge>
          </Flex>

          {/* grayLight */}
          <Flex justifyContent="space-between" py="20px">
            <Badge size="lg" variant="grayLight">
              Class VI
            </Badge>
            <Badge size="sm" variant="grayLight">
              0
            </Badge>
            <Badge size="xs" variant="grayLight">
              VI
            </Badge>
            <Badge size="md" variant="grayLight">
              0
            </Badge>
            <Badge size="md" variant="grayLight">
              1379
            </Badge>
          </Flex>

          {/* default */}
          <Flex justifyContent="space-between" py="20px">
            <Badge size="lg">Discovery</Badge>
            <Badge size="sm">5/10</Badge>
            <Badge size="xs">D</Badge>
            <Badge size="md">1/10</Badge>
            <Badge size="md">9/10</Badge>
          </Flex>
        </Box>
      </ChakraProvider>
    </>
  )
}
