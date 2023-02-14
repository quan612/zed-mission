import React from 'react'
import { chakra, useStyles, HTMLChakraProps, forwardRef } from '@chakra-ui/react'
import { cx, __DEV__ } from '@chakra-ui/utils'

/**
 * Step ConnectorContainer component: blah blah blah
 */
export interface StepConnectorContainerProps extends HTMLChakraProps<'div'> {}
export const StepConnectorContainer = forwardRef<StepConnectorContainerProps, 'div'>(
  (props, ref) => {
    const styles = useStyles()

    return (
      <chakra.div
        className={cx('vhs-step__connector-container', props.className)}
        __css={styles.stepConnectorContainer}
        ref={ref}
      >
        {props.children}
      </chakra.div>
    )
  },
)

if (__DEV__) {
  StepConnectorContainer.displayName = 'StepConnectorContainer'
}

/**
 * Step Connector component: blah blah blah
 */
export interface StepConnectorProps extends HTMLChakraProps<'div'> {}
export const StepConnector = forwardRef<StepConnectorProps, 'div'>((props, ref) => {
  const styles = useStyles()

  return (
    <chakra.div
      className={cx('vhs-step__connector', props.className)}
      __css={styles.stepConnector}
      ref={ref}
    >
      {props.children}
    </chakra.div>
  )
})

if (__DEV__) {
  StepConnector.displayName = 'StepConnector'
}

const Connector = () => {
  return (
    <StepConnectorContainer>
      <StepConnector />
    </StepConnectorContainer>
  )
}

export default Connector
