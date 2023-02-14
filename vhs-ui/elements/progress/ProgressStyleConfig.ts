import { ComponentStyleConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/theme-tools'

export type ColorScheme = 'white' | 'yellow' | 'orange' | 'blue' | 'green' | 'red'
interface customColor {
  bg: string
}

export const progressColors: { [key in ColorScheme]: customColor } = {
  white: {
    bg: 'white.800',
  },
  yellow: {
    bg: 'yellow.600',
  },
  orange: {
    bg: 'orange.400',
  },
  blue: {
    bg: 'blue.200',
  },
  green: {
    bg: 'green.700',
  },
  red: {
    bg: 'red.500',
  },
}

export const ProgressStyleConfig: ComponentStyleConfig = {
  variants: {
    default: ({ colorScheme }: StyleFunctionProps) => ({
      track: {
        bg: 'gray.700',
      },
      filledTrack: {
        bg: `${colorScheme}.700`,
      },
    }),
    round: ({ colorScheme }: StyleFunctionProps) => ({
      track: {
        borderRadius: '1rem',
        height: '0.75rem',
        bg: 'black.300',
      },
      filledTrack: {
        bg: progressColors[colorScheme].bg,
      },
    }),
  },
  defaultProps: {
    colorScheme: 'white',
    variant: 'default',
  },
}
