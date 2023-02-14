import { ComponentStyleConfig } from '@chakra-ui/react'

export const AccordionStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    backgroundColor: 'gray.1100',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  variants: {
    default: {
      button: {
        fontSize: '16px',
        outline: '1px solid',
        outlineColor: 'gray.1100',
        backgroundColor: 'gray.1100',
        _focus: { boxShadow: 'none' },
        py: '0',
      },
    },
    notificationSettings: {
      button: {
        padding: 0,
        backgroundColor: 'unset',
        textAlign: 'start',
      },
      panel: {
        padding: 0,
      },
      icon: {
        width: '24px',
        height: '24px',
        color: 'white.700',
        opacity: 0.64,
      },
    },
    gray: {
      py: '0.5rem',
      button: {
        backgroundColor: 'gray.800',
        _focus: { boxShadow: 'none' },
      },
    },
  },
  defaultProps: {
    variant: 'default',
  },
}
