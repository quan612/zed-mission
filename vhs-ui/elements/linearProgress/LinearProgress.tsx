import React from 'react'
import { Box, BoxProps, useMultiStyleConfig } from '@chakra-ui/react'

type StepPropsType = {
  value: number
  isActive: boolean
  isInProg: boolean
  isFirst: boolean
}
interface IChildrenProps {
  stepsArray: Array<StepPropsType>
}
interface ILinearProgressProps extends BoxProps {
  max: number
  current?: number
  children: React.FunctionComponentFactory<IChildrenProps>
}

const LinearProgress = ({ max = 10, current = 3, children }: ILinearProgressProps) => {
  const styles = useMultiStyleConfig('LinearProgress', {})
  const stepsArray = [...new Array(max)].map((_, idx) => {
    const value = idx + 1
    const isActive = current > value
    const isInProg = current == value
    const isFirst = value == 1
    return { value, isActive, isInProg, isFirst }
  })
  return <Box __css={{ ...styles }}>{children({ stepsArray })}</Box>
}

export default LinearProgress
