import styled from '@emotion/styled'
import { Box, CloseButton } from '@chakra-ui/react'
import { zedTheme } from '@/vhs-ui/theme'

const { colors, fontWeights } = zedTheme

const MessageContainer = styled.div`
  margin-left: 15px;
  color: white;
`
const StyledPrimaryMessage = styled.div`
  font-style: ${fontWeights.normal};
  font-weight: 500;
  font-size: 22px;
`

const StyledSecondaryMessage = styled.div`
  font-style: ${fontWeights.normal};
  font-weight: ${fontWeights.normal};
  font-size: 18px;
  font-family: Montserrat;
  color: #f0f8ff;
`

const StyledChakraToast = styled(Box)`
  border-style: solid;
  background: linear-gradient(
        270.03deg,
        rgba(42, 46, 53, 0.7),
        60%,
        ${({ variant }) => colors.toastFills[variant]}
      )
      padding-box,
    linear-gradient(
        90deg,
        ${({ variant }) => colors.toastBorders[variant]} 0%,
        rgba(60, 65, 73, 1) 35%
      )
      border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  border-color: transparent;
  border-width: 2px;
  border-radius: 5px;
  padding: 10px;
  min-height: 74px;
  min-width: 356px;
  margin: 16px;
  margin-right: 40px;
`

const ToastWrapper = styled.div`
  display: flex;
  padding: 6px 0 0 6px;
`

const StyledCloseToastButton = styled(CloseButton)`
  color: ${() => colors.white['700']};
  background-color: transparent;
  margin-left: auto;
  margin-top: -15px;
  margin-right: -10px;
`

export {
  StyledChakraToast,
  ToastWrapper,
  StyledPrimaryMessage,
  StyledSecondaryMessage,
  MessageContainer,
  StyledCloseToastButton,
}
