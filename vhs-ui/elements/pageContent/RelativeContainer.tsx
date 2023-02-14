import React from 'react'
import { chakra, useStyles, HTMLChakraProps, forwardRef } from '@chakra-ui/react'
import { __DEV__ } from '@chakra-ui/utils'

export interface RelativeContainer extends HTMLChakraProps<'div'> {}

export const RelativeContainer = forwardRef<RelativeContainer, 'div'>(
  ({ className, children }, ref) => {
    const styles = useStyles()

    return (
      <chakra.div className={className} __css={styles.relativeContainer} ref={ref}>
        {children}
      </chakra.div>
    )
  },
)

if (__DEV__) {
  RelativeContainer.displayName = 'RelativeContainer'
}
