import React, { FC, ReactNode } from 'react'

import { Accordion as ChakraAccordion, Box, useStyleConfig, AccordionProps } from '@chakra-ui/react'

interface IAccordionProps extends AccordionProps {
  children?: ReactNode
  variant?: string
}

const Accordion: FC<IAccordionProps> = ({ children, variant, ...props }) => {
  const styles = useStyleConfig('Accordion', { variant })
  return (
    <Box __css={styles}>
      <ChakraAccordion allowMultiple {...props}>
        {children}
      </ChakraAccordion>
    </Box>
  )
}

export default Accordion
