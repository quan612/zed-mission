import { ComponentStyleConfig } from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'

export const DropdownStyleConfig: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    button: {
      bg: transparentize('white.700', 0.04)(theme),
      color: transparentize('white.700', 0.64)(theme),
      transition: 'all 0.3s ease-out',
      borderRadius: 'md',
      border: '1px solid transparent',
      borderColor: 'gray.500',
      width: 'full',

      span: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

      _hover: {
        borderColor: 'gray.300',

        _disabled: {
          borderColor: 'gray.500',
          cursor: 'not-allowed',
        },
      },

      _active: {
        borderColor: 'green.300',
        outline: 'none',
      },
    },

    list: {
      width: 'inherit',
      bg: 'gray.400',
      borderRadius: 'md',
      border: '1px solid transparent',
      borderColor: 'gray.500',
      overflow: 'hidden',
      py: '1',
      zIndex: 'docked',

      button: {
        bg: 'gray.400',
        color: 'white.default',

        img: {
          h: 'auto',
          width: '2em', // fix size to be always 2x the font-size
        },

        _hover: {
          borderColor: 'gray.500',
          bg: 'gray.400',
          color: 'white.default',
          filter: 'brightness(1.15)',
        },

        _active: {
          borderColor: 'gray.500',
          bg: 'gray.400',
          color: 'white.default',
          filter: 'brightness(1.15)',
        },

        _focus: {
          borderColor: 'gray.500',
          bg: 'gray.400',
          color: 'white.default',
          filter: 'brightness(1.15)',
        },
      },
    },
  }),
  variants: {},
  sizes: {
    sm: () => {
      const buttonsStyle = {
        px: '4',
        py: '2',
        fontSize: 'sm',
      }
      return {
        button: buttonsStyle,
        item: buttonsStyle,
      }
    },
    md: () => {
      const buttonsStyle = {
        px: '6',
        py: '3',
        fontSize: 'md',
      }
      return {
        button: buttonsStyle,
        item: buttonsStyle,
      }
    },
    lg: () => {
      const buttonsStyle = {
        px: '8',
        py: '5',
        fontSize: 'lg',
      }
      return {
        button: buttonsStyle,
        item: buttonsStyle,
      }
    },
  },
  defaultProps: {
    variant: '',
    size: 'md',
    colorScheme: '',
  },
}
