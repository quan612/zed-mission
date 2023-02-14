import React from 'react'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'

import { CarouselBannerStyleConfig, Carousel } from './'

const theme = extendTheme({
  components: {
    Carousel: CarouselBannerStyleConfig,
  },
  styles: {
    global: {
      body: {
        fontFamily: '',
        color: '',
        bg: '',
        lineHeight: '',
      },
      '*::placeholder': {
        color: '',
      },
      '*, *::before, &::after': {
        borderColor: '',
        wordWrap: '',
      },
    },
  },
})

export const BasicCarouselBanner = () => {
  const multiItems = [
    {
      content: (
        <>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
          industries.
        </>
      ),
    },
    {
      content: (
        <>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
          industries.
        </>
      ),
      variant: 'white',
    },
  ]

  const multiItemsMultiLines = [
    {
      content: (
        <>
          <Box>Important announcement Line 1.</Box>
          <Box>Important announcement line 2.</Box>
        </>
      ),
    },
    {
      content: (
        <Box>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
          industries.
        </Box>
      ),
      variant: 'white',
    },
  ]

  const singleItemSingleLine = [
    {
      content: (
        <>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
          industries.
        </>
      ),
    },
  ]

  const singleItem = [
    {
      content: (
        <>
          <Box>Single Item First line.</Box> <Box>Single Item Second line.</Box>
        </>
      ),
    },
  ]
  return (
    <ChakraProvider theme={theme}>
      <Carousel items={multiItems} />

      <Box py="5">
        <Carousel items={multiItemsMultiLines} />
      </Box>

      <Box py="5">
        <Carousel items={singleItemSingleLine} />
      </Box>

      <Box py="5">
        <Carousel items={singleItem} />
      </Box>
    </ChakraProvider>
  )
}
