import { Box, Button, Flex } from '@chakra-ui/react'
import React, { FC } from 'react'

interface IBanner {
  onClick?: () => void
  buttonText?: string
  text: string
  title: string
  backgroundImage: string
  minHeight?: string
  textOpacity?: string
  width?: string
  isMobile?: boolean
  mobileWidth?: string
  textColor?: string
  textWidth?: string
  textSize?: string
  textGap?: string
  titleLabel?: React.ReactNode
}

const Banner: FC<IBanner> = ({
  onClick = () => {
    return
  },
  buttonText,
  text,
  title,
  backgroundImage,
  minHeight,
  textOpacity,
  width = '100%',
  isMobile = false,
  mobileWidth = '85%',
  textGap = '2rem',
  textColor = 'white.700',
  textWidth = 'auto',
  titleLabel,
  textSize = 'sm',
}) => {
  return (
    <Flex
      bgImage={backgroundImage}
      bgPosition="center"
      minHeight={minHeight || '155px'}
      bgSize="cover"
      borderRadius="lg"
      p="4rem"
      justify={isMobile ? 'end' : 'space-between'}
      align="center"
      width={isMobile ? mobileWidth : width}
      direction={isMobile ? 'column' : 'row'}
      gap="2rem"
      color={textColor}
      textAlign={isMobile ? 'center' : 'initial'}
    >
      <Flex direction="column" gap={textGap} justify="center">
        <Box fontSize="2xl" fontWeight="bold">
          {titleLabel || title}
        </Box>
        <Box fontSize={textSize} opacity={textOpacity || '1'} maxW={textWidth}>
          {text}
        </Box>
      </Flex>
      {buttonText && (
        <Button
          fontSize="sm"
          w={isMobile ? '100%' : 'fit-content'}
          onClick={onClick}
          data-testid="banner-button"
        >
          <Box p="20px 32px">{buttonText}</Box>
        </Button>
      )}
    </Flex>
  )
}

export default Banner
