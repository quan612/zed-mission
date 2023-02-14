import React, { ReactElement } from 'react'
import { createStandaloneToast } from '@chakra-ui/react'
import {
  MessageContainer,
  StyledPrimaryMessage,
  StyledSecondaryMessage,
  StyledChakraToast,
  StyledCloseToastButton,
  ToastWrapper,
} from '@/vhs-ui/elements/toast/styles'
import { zedTheme } from '@/vhs-ui/theme'
import ToastIcon from '@/vhs-ui/elements/toast/ToastIcon'

export type ToastVariant = 'success' | 'warning' | 'error'

const Toast = ({
  message,
  secondaryMessage,
  variant = 'warning',
  onClose,
}: {
  message: string
  secondaryMessage: ReactElement
  variant?: ToastVariant
  onClose: () => void
}) => {
  return (
    <StyledChakraToast variant={variant}>
      <ToastWrapper>
        <ToastIcon variant={variant} />
        <MessageContainer>
          <StyledPrimaryMessage>{message}</StyledPrimaryMessage>
          <StyledSecondaryMessage>{secondaryMessage}</StyledSecondaryMessage>
        </MessageContainer>
        <StyledCloseToastButton size="sm" onClick={onClose} />
      </ToastWrapper>
    </StyledChakraToast>
  )
}

export const toast = (
  message: string,
  secondaryMessage: ReactElement,
  variant: ToastVariant,
  closable: boolean,
) => {
  const chakraToast = createStandaloneToast({ theme: zedTheme })
  // const toast = useToast();
  // const toastRefs = React.useRef([])
  chakraToast({
    title: message,
    position: 'bottom-right',
    isClosable: closable,
    duration: 10000,
    render: ({ onClose }) => {
      // toastRefs.current.push(onClose)
      return (
        <Toast
          message={message}
          secondaryMessage={secondaryMessage}
          variant={variant}
          onClose={onClose}
        />
      )
    },
  })
}
