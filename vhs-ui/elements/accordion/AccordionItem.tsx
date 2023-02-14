import React, { FC } from 'react'

import {
  AccordionItem as ChakraAccordionItem,
  AccordionItemProps,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from '@chakra-ui/react'

interface IAccordionItemProps extends AccordionItemProps {
  titleContent: JSX.Element
  condensedTitleContent?: JSX.Element
  content: JSX.Element
  paddingLeft?: string
  onHandleClick?: () => void
  onHandleForwardExpanded?: (isExpanded: boolean) => void
  shouldDisplayIcon?: boolean
}

const AccordionItem: FC<IAccordionItemProps> = ({
  titleContent,
  condensedTitleContent,
  content,
  onHandleClick,
  onHandleForwardExpanded,
  paddingLeft,
  shouldDisplayIcon = true,
  isDisabled,
}) => {
  const handleClick = (isExpanded: boolean): void => {
    onHandleClick?.()
    onHandleForwardExpanded?.(isExpanded)
  }

  return (
    <ChakraAccordionItem className="ChakraAccordionItem" isDisabled={isDisabled}>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            onClick={() => handleClick(!isExpanded)}
            paddingLeft={paddingLeft}
            className="AccordionButton"
            pr="0 !important"
          >
            <Box flex="1" textAlign="left">
              <Flex alignItems="center">
                {titleContent}
                {/* Caret icon should always be displayed when expanded */}
                {(shouldDisplayIcon || isExpanded) && (
                  <AccordionIcon
                    width="24px"
                    height="24px"
                    color="white.700"
                    justifySelf="flex-end"
                    mr="8px"
                    ml="auto"
                  />
                )}
              </Flex>
              {/* If AccordionItem is NOT expanded and there is condensedTitleContent prop return condensedTitleContent*/}
              {!isExpanded && condensedTitleContent && condensedTitleContent}
            </Box>
          </AccordionButton>

          <AccordionPanel padding={'0'}>{content}</AccordionPanel>
        </>
      )}
    </ChakraAccordionItem>
  )
}

export default AccordionItem
