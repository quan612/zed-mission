import { ComponentStyleConfig } from '@chakra-ui/react'

export const TextStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    mb: '0',
  },
  variants: {
    trackerHeader: {
      lineHeight: '24px',
      fontSize: 'primarySize',
      color: 'white.700',
      fontWeight: 'bold',
    },
    trackerSecondary: ({ textColor }) => ({
      lineHeight: '16px',
      fontSize: '12px',
      color: textColor || 'rgba(240, 248, 255, 0.64)',
      fontWeight: 'medium',
    }),
  },
}
