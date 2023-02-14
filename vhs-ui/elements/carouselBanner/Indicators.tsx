import React, { FC } from 'react'
import { Box, Image, useStyles } from '@chakra-ui/react'

import ArrowIcon from './arrow-icon-white.svg'

interface IIndicatorsProps {
  onUpdateIndex: (activeIndex: number) => void
  activeIndex: number
}

const Indicators: FC<IIndicatorsProps> = ({ onUpdateIndex, activeIndex }) => {
  const styles = useStyles()

  return (
    <Box
      __css={styles.indicators}
      flexDirection={{ base: 'column', sm: 'row' }}
      minHeight={{ base: '48px', sm: 'auto' }}
      width={{ base: 'auto', sm: '50px' }}
      data-testid="carousel-indicators"
    >
      <button
        aria-label="indicators-button-prev"
        type="button"
        onClick={() => {
          onUpdateIndex(activeIndex - 1)
        }}
      >
        <img src={ArrowIcon} />
      </button>

      <button
        aria-label="indicators-button-next"
        type="button"
        onClick={() => {
          onUpdateIndex(activeIndex + 1)
        }}
      >
        <Image src={ArrowIcon} />
      </button>
    </Box>
  )
}

export default Indicators
