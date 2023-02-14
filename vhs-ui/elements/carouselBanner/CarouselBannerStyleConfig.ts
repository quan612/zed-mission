import { ComponentStyleConfig } from '@chakra-ui/react'

export const CarouselBannerStyleConfig: ComponentStyleConfig = {
  parts: ['container', 'itemsContainer', 'indicators'],
  baseStyle: ({ isMulti }) => ({
    container: {
      boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.04)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      py: '12px',
      px: '2rem',
      button: {
        backgroundColor: 'transparent',
      },
      a: {
        color: '#27B18A',
        fontWeight: 'semibold',
      },
    },
    contents: {
      display: 'flex',
      alignItems: 'center',
      width: isMulti ? '130rem' : 'auto',
    },
    itemsContainer: {
      flex: '1',
    },
    indicators: {
      display: 'flex',
      justifyContent: 'space-between',
      button: {
        _last: {
          img: {
            transform: 'rotate(180deg)',
          },
        },
      },
    },
  }),
  variants: {
    purple: () => ({
      container: {
        background: '#2B2942',
        color: 'rgba(240, 248, 255, 0.64)',
      },
    }),
    white: () => ({
      container: {
        background: '#E3E8EF',
        color: '#22262D',
      },
      indicators: {
        img: {
          filter:
            'invert(89%) sepia(23%) saturate(76%) hue-rotate(181deg) brightness(104%) contrast(88%)',
        },
      },
    }),
  },
  sizes: {
    lg: {
      container: {
        minHeight: '52px',
      },
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'purple',
  },
}
