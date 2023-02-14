import React from 'react'
import { ToastVariant } from '@/vhs-ui/elements/toast/index'
import { ErrorIcon, SuccessIcon, WarningIcon } from '@/vhs-ui/icons'

const ToastIconVariant = {
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
}

const ToastIcon = ({ variant }: { variant: ToastVariant }) => {
  return (variant && ToastIconVariant[variant]) || <WarningIcon />
}

export default ToastIcon
