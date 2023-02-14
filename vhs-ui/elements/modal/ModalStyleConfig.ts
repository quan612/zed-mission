import type { ComponentMultiStyleConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/theme-tools'

export const ModalStyleConfig: ComponentMultiStyleConfig = {
  parts: ['overlay', 'dialogContainer', 'dialog', 'header', 'closeButton', 'body', 'footer'],
  baseStyle: ({ theme }) => ({
    dialogContainer: {
      zIndex: '9999',
    },
    dialog: {
      borderRadius: '8px',
      my: '0',
      maxHeight: '667px',
    },
    closeButton: {
      backgroundColor: 'transparent',
      color: 'white.500',
      top: '14px',
      right: '14px',
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      pt: '10',
      pb: '10',
      fontWeight: 'bold',
      fontSize: '2xl',
      color: 'white.700',
    },
    body: {
      py: '5',
      px: '10',
      color: 'white.500',
      fontSize: 'md',
      overflowY: 'auto',
    },
    footer: {
      pt: '8',
      pb: '10',
      borderTop: `1px solid ${theme.colors.white.decorative}`,
    },
  }),
  sizes: {
    lg: { content: { width: '448px' } },
    base: {
      dialog: {
        height: '100vh',
        maxHeight: '100vh',
        width: '100vw',
      },
      header: {
        fontSize: 'lg',
      },
    },
  },
  variants: {
    mobile: {
      dialogContainer: {
        zIndex: '1000001',
      },
      header: {
        p: '0',
      },
      body: {
        p: '0',
      },
    },

    centered: (props: StyleFunctionProps) => {
      const { colorScheme: c } = props

      return {
        dialog: {
          background: c === 'purpleDark' ? 'gradients.purpleDark' : `${c}.1100`,
        },
      }
    },
    right: (props: StyleFunctionProps) => {
      const { colorScheme: c } = props

      return {
        dialog: {
          background: c === 'purpleDark' ? 'gradients.purpleDark' : `${c}.1100`,
        },
        dialogContainer: {
          paddingRight: '5',
          left: 'initial',
          top: 'initial',
          right: '6.5',
          bottom: '0',
          width: 'initial',
        },
      }
    },
  },
  defaultProps: {
    variant: 'centered',
    colorScheme: 'gray',
  },
}
