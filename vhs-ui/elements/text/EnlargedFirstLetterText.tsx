import React, { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface ITextProps {
  children?: ReactNode
  enlargedSize?: string
  defaultSize?: string
}

const EnlargedFirstLetterText: FC<ITextProps> = ({ children, enlargedSize, defaultSize }) => {
  return (
    <Box
      fontSize={defaultSize || 'sm'}
      display="inline-block"
      __css={{
        '&::first-letter': {
          fontSize: enlargedSize || 'md',
        },
      }}
    >
      {children}
    </Box>
  )
}

export default EnlargedFirstLetterText
