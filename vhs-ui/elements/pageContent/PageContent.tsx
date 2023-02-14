import React from 'react'
import { Flex, FlexProps, useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'
import { __DEV__ } from '@chakra-ui/utils'

interface PageContentProps extends FlexProps {
  variant?: string
  size?: string
  children: React.ReactNode
}

export const PageContent: React.FC<PageContentProps> = React.forwardRef<
  HTMLDivElement,
  PageContentProps
>(({ size, variant, children, ...rest }, ref) => {
  const styles = useMultiStyleConfig('PageContent', { size, variant })
  return (
    <Flex __css={styles.pageContent} {...rest} ref={ref}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Flex>
  )
})

if (__DEV__) {
  PageContent.displayName = 'PageContent'
}
