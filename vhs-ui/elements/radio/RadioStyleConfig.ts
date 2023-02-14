import { ComponentStyleConfig } from '@chakra-ui/react'

export const RadioStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    label: {
      ml: '2.5',
    },
    control: {
      color: 'white.700',
      _checked: {
        color: 'green.700',
        background: 'transparent !important',
        borderColor: 'green.700 !important',
      },
      _focus: { boxShadow: 'none' },
    },
  },
}
