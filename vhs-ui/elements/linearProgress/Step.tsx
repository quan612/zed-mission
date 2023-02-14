import React from 'react'
import {
  chakra,
  useStyles,
  HTMLChakraProps,
  forwardRef,
  useMultiStyleConfig,
  StylesProvider,
} from '@chakra-ui/react'
import { cx, __DEV__ } from '@chakra-ui/utils'

import { StepConnector } from '.'

/**
 * Step Container component: blah blah blah
 */
export interface StepContainerProps extends HTMLChakraProps<'div'> {}
export const StepContainer = forwardRef<StepContainerProps, 'div'>((props, ref) => {
  const styles = useStyles()
  return (
    <chakra.div
      className={cx('vhs-step__container', props.className)}
      __css={styles.stepContainer}
      ref={ref}
    >
      {props.children}
    </chakra.div>
  )
})

if (__DEV__) {
  StepContainer.displayName = 'StepContainer'
}

/**
 * Step Content component: blah blah blah
 */
export interface StepContentProps extends HTMLChakraProps<'div'> {}
export const StepContent = forwardRef<StepContentProps, 'div'>((props, ref) => {
  const styles = useStyles()
  return (
    <chakra.div
      className={cx('vhs-step__content', props.className)}
      __css={styles.stepContent}
      ref={ref}
    >
      {props.children}
    </chakra.div>
  )
})

if (__DEV__) {
  StepContent.displayName = 'StepContent'
}

/**
 * Step Number component: blah blah blah
 */
export interface StepNumberProps extends HTMLChakraProps<'div'> {}
export const StepNumber = forwardRef<StepNumberProps, 'div'>((props, ref) => {
  const styles = useStyles()

  return (
    <chakra.div
      className={cx('vhs-step__number', props.className)}
      __css={styles.stepNumber}
      ref={ref}
    >
      {props.children}
    </chakra.div>
  )
})

if (__DEV__) {
  StepNumber.displayName = 'StepNumber'
}

/**
 * Step Label component: blah blah blah
 */
export interface StepLabelProps extends HTMLChakraProps<'div'> {}
export const StepLabel = forwardRef<StepLabelProps, 'div'>((props, ref) => {
  const styles = useStyles()

  return (
    <chakra.div
      className={cx('vhs-step__label', props.className)}
      __css={styles.stepLabel}
      ref={ref}
    >
      {props.children}
    </chakra.div>
  )
})

if (__DEV__) {
  StepLabel.displayName = 'StepLabel'
}
interface IStepProps {
  value: number
  isActive: boolean
  isFirst: boolean
  isInProg: boolean
  children?: React.ReactChild
}

const StepComp = ({ value, isActive, isFirst, isInProg, children }: IStepProps) => {
  const styles = useMultiStyleConfig('ProgressStep', {
    isActive,
    isInProg,
  })
  return (
    <StylesProvider value={styles}>
      <StepContainer>
        <StepContent>
          <StepNumber>{value}</StepNumber>
          {children && <StepLabel>{children}</StepLabel>}
        </StepContent>
        {!isFirst && <StepConnector />}
      </StepContainer>
    </StylesProvider>
  )
}

export default StepComp
