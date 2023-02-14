import React, { useState } from 'react'
import { useDisclosure, Icon, IconProps } from '@chakra-ui/react'
import { SystemStyleObject } from '@chakra-ui/system'
import { cx } from '@chakra-ui/utils'
import { motion, MotionStyle } from 'framer-motion'
import ArrowRightIcon from './arrow-right'

// components
// Icon
interface ICollapsibleIconProps extends IconProps {
  isDisabled: boolean
  isOpen: boolean
}
const CollapsibleIcon: React.FC<ICollapsibleIconProps> = ({
  className,
  isDisabled = false,
  isOpen = false,
  ...props
}) => {
  const _className = cx('chakra-accordion__icon', className)
  //   const styles = useStyles()
  const iconStyles: SystemStyleObject = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
    // ...styles.icon,
  }

  return (
    <Icon viewBox="0 0 24 14" aria-hidden className={_className} __css={iconStyles} {...props}>
      <ArrowRightIcon />
    </Icon>
  )
}

// Container
interface IContainerProps {
  onAnimationStart: () => void
  onAnimationComplete: () => void
  isOpen: boolean
  expandedWidth: number
  collapsedWidth: number
  style: MotionStyle
  children: React.ReactNode
}
const CollapsibleContainer = ({
  onAnimationStart,
  onAnimationComplete,
  isOpen,
  collapsedWidth,
  expandedWidth,
  style,
  children,
  ...props
}: IContainerProps) => {
  return (
    <motion.div
      {...props}
      hidden={false}
      initial={false}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      animate={{ width: isOpen ? expandedWidth : collapsedWidth }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

interface IChildrenProps {
  getToggleButtonProps: (props?: any) => any
  getDefaultContainerProps: (props?: any) => any
  getToggleIconProps: (props?: any) => any
  Container: typeof CollapsibleContainer
  Icon: typeof CollapsibleIcon
  isCollapsed: boolean
}
export default function HorizontalCollapsible({
  children,
  initialCollapsedState,
}: {
  children: React.FunctionComponentFactory<IChildrenProps>
  initialCollapsedState: boolean
}) {
  const {
    getButtonProps: getToggleButtonProps,
    getDisclosureProps,
    isOpen,
  } = useDisclosure({ defaultIsOpen: initialCollapsedState })
  /**
   * * why another state variable while we have isOpen?
   * * * we need to know if the container is fully open or is it just starting to open
   * * * this helps to avoid showing distorted elements
   * * * while the container does not have a proper width value
   */
  const [isCollapsed, setCollapsed] = useState(!isOpen)
  const getDefaultContainerProps = () => ({
    ...getDisclosureProps(),
    expandedWidth: 284,
    collapsedWidth: 64,
    onAnimationStart: () => setCollapsed(isOpen ? false : true),
    onAnimationComplete: () => setCollapsed(!isOpen),
    isOpen: isOpen,
  })
  return children({
    getToggleButtonProps,
    getDefaultContainerProps,
    getToggleIconProps: (props: any) => ({
      ...props,
      isOpen: isOpen,
    }),
    Container: CollapsibleContainer,
    Icon: CollapsibleIcon,
    isCollapsed,
  })
}
