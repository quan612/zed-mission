import { ComponentStyleConfig } from '@chakra-ui/react'

export const BadgeStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    color: 'white.700',
    height: '24px',
    width: 'fit-content',
    borderRadius: '4px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizes: {
    xs: {
      width: '24px',
    },
    sm: {
      width: '40px',
    },
    md: {
      width: '48px',
    },
    lg: {
      width: '86px',
    },
    auto: {
      px: '1rem',
    },
  },
  variants: {
    blueDark: {
      background: 'blue.300',
    },
    brown: {
      background: 'brown.500',
    },
    brownChoc: {
      background: 'brown.600',
    },
    brownLight: {
      background: 'brown.200',
      textColor: 'black.100',
      fontWeight: 'bold',
    },
    cyan: {
      background: 'cyan.badge',
    },
    gray: {
      background: 'gray.1000',
    },
    grayLight: {
      background: 'gray.300',
    },
    grayMedium: {
      background: 'white.decorative',
    },
    gradientRainbow: {
      background: 'gradients.rainbow',
    },
    gradientBlueGreen: {
      background: 'gradients.blueGreen',
      textColor: 'blue.100',
    },
    gradientGreenEmerald: {
      background: 'gradients.greenEmerald',
      textColor: 'green.700',
    },
    gradientBlack: {
      background: 'gradients.black',
    },
    gradientOrange: {
      background: 'gradients.orange',
      textColor: 'orange.300',
    },
    gradientPurple: {
      background: 'gradients.purple',
      textColor: 'purple.300',
    },
    gradientRed: {
      background: 'gradients.red',
      textColor: 'red.300',
    },
    gradientRedBadge: {
      background: 'gradients.red',
      textColor: 'white.700',
    },
    green: {
      background: 'green.400',
    },
    greenLight: {
      background: 'green.300',
    },
    greenDark: {
      background: 'green.200',
    },
    gold: {
      background: 'gradients.gold',
      textColor: 'white',
    },
    greenBadge: {
      background: 'green.badge',
    },
    indigo: {
      background: 'indigo.600',
    },
    purple: {
      background: 'purple.500',
    },
    purpleDark: {
      background: 'purple.700',
    },
    purpleGrape: {
      background: 'purple.600',
    },
    purpleMeteorite: {
      background: 'purple.200',
    },
    white: {
      background: 'white.400',
      textColor: 'black.100',
      fontWeight: 'bold',
    },
    yellow: {
      background: 'yellow.500',
      textColor: 'black.100',
      fontWeight: 'bold',
    },
  },
  defaultProps: {
    size: 'auto',
    variant: 'gray',
  },
}
