import React, { FC, ReactNode } from 'react'
import { Badge as ChakraBadge, useStyleConfig, BadgeProps } from '@chakra-ui/react'

interface IBadgeProps extends BadgeProps {
  children?: ReactNode
}

const Badge: FC<IBadgeProps> = ({ children, ...customStyles }) => {
  const styles = useStyleConfig('Badge', {})

  return (
    <ChakraBadge __css={styles} {...customStyles}>
      {children}
    </ChakraBadge>
  )
}

export default Badge
