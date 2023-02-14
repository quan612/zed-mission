import React, { FC, ReactFragment } from 'react'
import { Box, ScaleFade } from '@chakra-ui/react'

interface ICarouselItemProps {
  children: ReactFragment
  isActive: boolean
  isMulti: boolean
}

const CarouselItem: FC<ICarouselItemProps> = ({ children, isActive, isMulti }) => {
  return (
    <Box data-testid="carousel-list-item">
      <ScaleFade in={isActive} initialScale={1} unmountOnExit>
        <Box
          display={{ base: `${isMulti ? '' : 'grid'}`, lg: 'flex' }}
          alignItems={{ lg: 'center' }}
          justifyItems="center"
          flexWrap="wrap"
        >
          {children}
        </Box>
      </ScaleFade>
    </Box>
  )
}

export default CarouselItem
