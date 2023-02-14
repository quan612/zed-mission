import React from 'react'
import { createIcon } from '@chakra-ui/react'

const TrackerIcon = createIcon({
  defaultProps: {
    fill: 'none',
    w: 'var(--chakra-sizes-x3)',
    h: 'var(--chakra-sizes-x3)',
    strokeWidth: '2px',
  },
  /* eslint-disable react/jsx-key */
  path: [
    <path
      d="M12 3.5L16 7.99999M12 3.5L8.00001 7.99999M12 3.5L12 13M6.5 13L10 16.4999L6.5 20L3 16.4999L6.5 13ZM17.5 13L21 16.4999L17.5 20L14 16.5003L17.5 13Z"
      stroke="#F0F8FF"
      strokeWidth="2"
      strokeLinejoin="bevel"
    />,
  ],
  /* eslint-enable react/jsx-key */
})

export default TrackerIcon
