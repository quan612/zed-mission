import { ComponentStyleConfig } from '@chakra-ui/react'

export const PageContentStyleConfig: ComponentStyleConfig = {
  parts: ['pageContent', 'main', 'relativeContainer'],
  baseStyle: () => ({
    pageContent: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: '1',
    },
    main: {
      fontFamily: 'Montserrat',
      color: 'white.700',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      fontWeight: '500',
      width: {
        base: '100%',
        md: '129.6rem',
      },
    },
    relativeContainer: {
      position: 'relative',
    },
  }),
  variants: {},
  sizes: {},
  defaultProps: {
    colorScheme: '',
  },
}
