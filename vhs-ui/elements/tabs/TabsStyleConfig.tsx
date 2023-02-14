import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const TabsStyleConfig: ComponentMultiStyleConfig = {
  parts: ['root', 'tab', 'tabList', 'tabpanel', 'tabpanels', 'indicator'],
  baseStyle: ({ theme }) => ({
    tab: {
      bg: 'transparent',
      color: theme.colors.white.secondary,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.md,
      lineHeight: theme.lineHeights[6],

      _focus: {
        boxShadow: 'none',
      },

      _selected: {
        bg: 'transparent',
        borderBottom: '2px solid transparent',
        borderImage: theme.colors.gradients.green,
        borderImageSlice: 1,
        color: theme.colors.white[700],
      },
    },
    tablist: {
      borderBottom: `2px solid ${theme.colors.white.slight}`,
      maxW: '1200px',
      mb: [0, 2],
      mt: 12,
      mx: 'auto',
    },
    tabpanel: {
      p: 0,
    },
  }),
  defaultProps: {
    variant: 'unstyled',
  },
}
