import React from 'react'

import { Button, ChakraProvider, extendTheme, useDisclosure } from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalStyleConfig,
} from '.'

const typography = {
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
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

const space = {
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

const sizes = {
  ...space,
  max: 'max-content',
  min: 'min-content',
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  '8xl': '90rem',
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

const radii = {
  0: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    gray: {
      500: '#636464',
      700: '#858F98',
      1100: '#22262D',
    },
    green: {
      500: '#317d6c',
      700: '#27b18a',
      900: '#75E1C2',
      glow: '#9cb99c',
    },
    white: {
      decorative: 'rgba(240, 248, 255, 0.12)',
      default: '#fff',
      500: '#f0f8ffa3',
      700: '#F0F8FF',
    },
    lightBlue: {
      glow: '#c9e9ff',
    },
    gradients: {
      purpleDark: 'linear-gradient(180deg, #2B2942 0%, #23262C 100%)',
    },
  },
  ...typography,
  radii,
  sizes,
  space,
  components: {
    Modal: ModalStyleConfig,
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Montserrat',
        color: '',
        bg: '',
        lineHeight: '',
      },
      '*::placeholder': {
        color: '',
      },
      '*, *::before, &::after': {
        borderColor: '',
        wordWrap: '',
      },
    },
  },
})

export const BasicModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      <ChakraProvider theme={theme}>
        <Button onClick={onOpen} aria-label="open-modal-button">
          Open Modal
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} variant="gray">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Some content</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" variant="ghost">
                Secondary Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  )
}
