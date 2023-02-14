import React, { FC, useEffect, useState, ReactFragment } from 'react'
import { Box, useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'

import Indicators from './Indicators'
import CarouselItem from './CarouselItem'

interface ICarouselItem {
  content: ReactFragment
  variant?: string
}

interface ICarouselProps {
  items: ICarouselItem[]
  variant?: string
  interval?: number
}

const DEFAULT_INTERVAL = 3000

const Carousel: FC<ICarouselProps> = ({ items, variant, interval }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const activeItemVariant = items[activeIndex]?.variant

  const isMulti = items.length > 1

  /**
   * single active item variant has priority over variant prop
   **/
  const styles = useMultiStyleConfig('Carousel', {
    variant: activeItemVariant || variant,
    isMulti,
  })

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1
    } else if (newIndex >= items.length) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, interval || DEFAULT_INTERVAL)

    return () => {
      if (intervalTimer) {
        clearInterval(intervalTimer)
      }
    }
  })

  return (
    <Box __css={styles.container} data-testid="carousel">
      <Box __css={styles.contents}>
        <StylesProvider value={styles}>
          <Box
            __css={styles.itemsContainer}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex
              return (
                isActive && (
                  <CarouselItem key={index} isActive={index === activeIndex} isMulti={isMulti}>
                    {item.content}
                  </CarouselItem>
                )
              )
            })}
          </Box>
          {isMulti && <Indicators activeIndex={activeIndex} onUpdateIndex={updateIndex} />}
        </StylesProvider>
      </Box>
    </Box>
  )
}

export default Carousel
