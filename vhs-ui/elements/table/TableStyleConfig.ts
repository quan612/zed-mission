import { ComponentStyleConfig } from '@chakra-ui/react'

export const TableStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    table: {
      tableLayout: 'fixed',
      fontFamily: 'Montserrat',
      color: 'white.700',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      fontWeight: '500',
    },
    th: {},
  },
  variants: {
    racing: {
      table: {
        tableLayout: 'fixed',
        fontSize: {
          base: '0.8rem',
          sm: '1.0rem',
          lg: '1.2rem',
        },
      },
      thead: {
        fontWeight: '600',
        display: {
          base: 'none',
          md: 'revert',
          borderBottom: '1px solid',
          borderColor: 'white.decorative',
        },
      },
      th: {
        fontSize: {
          base: '0.8rem',
          sm: '1.0rem',
          lg: '1.2rem',
        },
        textTransform: 'revert',
        fontWeight: 500,
        letterSpacing: 'revert',
        fontFamily: 'Montserrat',
        color: 'white.help',
        display: {
          base: 'none',
          md: 'revert',
        },
        alignSelf: 'normal',
        padding: '0 0 11px 0',
        borderBottom: '1px solid rgba(240, 248, 255, 0.12)',
        '&:first-of-type': {
          paddingLeft: '20px',
          width: '30%',
        },
        '&:nth-of-type(2)': {
          width: '20%',
        },
        '&:last-of-type': {
          textAlign: 'right',
          paddingRight: '20px',
        },
      },
      tr: {
        display: {
          base: 'grid',
          md: 'revert',
        },
        gridTemplateAreas: `"eventName eventPrize"
          "eventDetails  eventEntranceFee"
          "eventClass  eventRegistered"`,
        position: 'relative',
        width: '100%',
        borderBottom: '1px solid rgba(240, 248, 255, 0.04)',
      },
      td: {
        border: 'none',
        textAlign: 'left',
        padding: '0',
      },
    },
  },
}
