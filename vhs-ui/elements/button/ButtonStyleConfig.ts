import { ComponentStyleConfig, keyframes } from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'

export const GlowButtonStyleConfig: ComponentStyleConfig = {
  baseStyle: ({ isAnimating, theme }) => ({
    container: {
      position: 'absolute',
      inset: 0,
      mixBlendMode: 'hard-light',
      pointerEvents: 'none',
      zIndex: 1,
    },
    linesGroup: {
      position: 'absolute',
      inset: 0,
    },
    svgLine: {
      ...(isAnimating && { animation: `${stroke} 1s linear` }),
      display: 'block',
      position: 'absolute',
      inset: '0',
      overflow: 'visible',
      fill: 'none',
      strokeWidth: '2',
      stroke: 'lightBlue.glow',
      width: 'full',
      height: 'full',
      strokeDasharray: '12 12',
      strokeDashoffset: '12',
      opacity: '0',
      transform: 'rotate(-1deg) translate3d(0, 0, 0)',
    },
    svgLine1: {
      stroke: transparentize('green.glow', 0.37)(theme),
    },
    svgLine2: {
      strokeWidth: '6px',
      filter: 'blur(20px)',
    },
    svgLine3: {
      strokeWidth: '5px',
      filter: 'blur(6px)',
    },
    svgLine4: {
      strokeWidth: '10px',
      filter: 'blur(56px)',
    },
  }),
  variants: {},
  defaultProps: {
    colorScheme: '',
  },
}

export const ButtonStyleConfig: ComponentStyleConfig = {
  baseStyle: ({ colorScheme }) => ({
    transition: 'all 0.3s ease-out',
    borderRadius: 'lg',
    color: `${colorScheme}.500`,

    img: {
      opacity: '0.64',
      height: '1.25em', // harcoded so we can always have the icon 25% bigger than the current font size
      transition: 'all 0.3s ease-out',
    },

    _hover: {
      filter: 'brightness(1.15)',
      color: `${colorScheme}.700`,

      _disabled: {
        filter: 'brightness(0.85)',
        color: 'white.500',

        img: {
          opacity: '0.64',
        },
      },

      img: {
        opacity: '1',
      },
    },

    _disabled: {
      boxShadow: 'none',
      filter: 'brightness(0.85)',

      _hover: { background: 'unset' },
    },

    _focus: {
      boxShadow: 'none',
    },
  }),
  variants: {
    gradient: ({ colorScheme, theme }) => ({
      bgGradient: `linear(to-r, ${colorScheme}.700, ${colorScheme}.500)`,
      boxShadow: `0 0 8px 0 ${transparentize(`${colorScheme}.700`, 0.37)(theme)}`,
      color: 'white.default',

      _hover: {
        color: 'white.default', // needed to override default behavior

        _disabled: {
          bg: 'gray.500',
          color: 'white.default', // needed to override default behavior
        },
      },

      _disabled: {
        bg: 'gray.500',
      },
    }),
    solid: ({ colorScheme, theme }) => ({
      bg: `${colorScheme}.500`,
      boxShadow: `0 0 8px 0 ${transparentize(`${colorScheme}.500`, 0.37)(theme)}`,
      color: 'white.default',

      _hover: {
        bg: `${colorScheme}.700`,
        color: 'white.default', // needed to override default behavior

        _disabled: {
          bg: `${colorScheme}.500`,
          color: 'white.default', // needed to override default behavior
        },
      },

      _disabled: {
        bg: `${colorScheme}.500`, // needed to override default behavior
        color: 'white.default', // needed to override default behavior
      },
    }),
    outline: ({ colorScheme, theme }) => ({
      background: 'unset',
      borderWidth: '2px',
      borderColor: `${colorScheme}.500`,
      color: `${colorScheme}.500`,

      _hover: {
        background: transparentize(`${colorScheme}.700`, 0.12)(theme),
        borderColor: `${colorScheme}.700`,
        color: `${colorScheme}.700`,

        _disabled: {
          background: 'unset',
          borderColor: 'white.500',
          color: 'white.500',
        },
      },

      _disabled: {
        backgroundColor: 'unset', // needed to override default behavior
        borderColor: 'white.500',
        color: 'white.500',
      },
    }),
    icon: () => ({
      background: 'unset',
      borderColor: 'unset',
      svg: {
        opacity: 0.32,
      },
      _hover: {
        svg: {
          opacity: 1,
        },
        _disabled: {
          background: 'unset',
          borderColor: 'white.500',
          color: 'white.500',
        },
      },

      _disabled: {
        backgroundColor: 'unset', // needed to override default behavior
        borderColor: 'white.500',
        color: 'white.500',
      },
    }),
    text: {},
  },
  sizes: {
    sm: {
      letterSpacing: 'normal',
      px: '3',
      py: '1',
    },
    md: {
      letterSpacing: 'wide',
      px: '5',
      py: '4',
    },
    lg: {
      letterSpacing: 'wider',
      px: '9',
      py: '7',
    },
  },
  defaultProps: {
    variant: 'gradient',
    colorScheme: 'green',
    size: 'md',
  },
}

const stroke = keyframes`
  30%,
  55% {
    opacity: 0.5;
  }
  100% {
    stroke-dashoffset: 5;
    opacity: 0;
  }
`
