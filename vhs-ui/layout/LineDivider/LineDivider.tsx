import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Divider, BorderOutline, StyledText } from './styles'

const LineDivider = () => {
  return (
    <Flex align="center">
      <Divider />
      <BorderOutline>
        <StyledText>New</StyledText>
      </BorderOutline>
      <Divider />
    </Flex>
  )
}

export default LineDivider
