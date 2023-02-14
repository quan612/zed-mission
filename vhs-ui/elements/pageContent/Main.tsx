import React from 'react'
import { chakra, useStyles, HTMLChakraProps, forwardRef } from '@chakra-ui/react'
import { __DEV__ } from '@chakra-ui/utils'

export interface MainProps extends HTMLChakraProps<'main'> {}

export const Main = forwardRef<MainProps, 'main'>(({ className, children }, ref) => {
  const styles = useStyles()

  return (
    <chakra.main className={className} __css={styles.main} ref={ref}>
      {children}
    </chakra.main>
  )
})

if (__DEV__) {
  Main.displayName = 'main'
}
