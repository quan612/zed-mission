import React from 'react'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'

import LinearProgress, { LinearProgressStep, LinearProgressStyleConfig, StepStyleConfig } from '.'

const theme = extendTheme({
  components: {
    LinearProgress: LinearProgressStyleConfig,
    ProgressStep: StepStyleConfig,
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
export const BasicLinearProgress = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box w={400} bg={'#2A2E35'} p={10}>
        <LinearProgress max={10} current={3}>
          {({ stepsArray }) => (
            <>
              {stepsArray.map(({ value, isActive, isFirst, isInProg }) => (
                <LinearProgressStep
                  key={value}
                  value={value}
                  isActive={isActive}
                  isFirst={isFirst}
                  isInProg={isInProg}
                />
              ))}
            </>
          )}
        </LinearProgress>
      </Box>
    </ChakraProvider>
  )
}
