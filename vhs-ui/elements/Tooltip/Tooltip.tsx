import React, { FC, useState } from 'react'
import { Flex, Box, Tooltip as ChakraToolTip, TooltipProps, useMediaQuery } from '@chakra-ui/react'

interface ITooltipProps extends TooltipProps {
  label: React.ReactNode
  initialOpacity?: number
  overlayWidth?: string
}

const Tooltip: FC<ITooltipProps> = ({
  label,
  children,
  placement = 'top',
  initialOpacity,
  overlayWidth,
}) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false)
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const tooltipLabel = (
    <Box fontSize="xs" width={overlayWidth ?? 'auto'}>
      {label}
    </Box>
  )

  return (
    <ChakraToolTip
      label={tooltipLabel}
      isOpen={isLabelOpen}
      placement={placement}
      hasArrow
      borderRadius={'6px'}
      backgroundColor="black.600"
      p={2.5}
      arrowSize={7}
    >
      <Flex
        onMouseEnter={() => !isMobile && setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen((prev) => !prev)}
        opacity={isLabelOpen && initialOpacity ? 1 : initialOpacity}
      >
        {children}
      </Flex>
    </ChakraToolTip>
  )
}

export default Tooltip
