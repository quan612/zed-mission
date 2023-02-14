import React, { useState, useRef, FC, useEffect } from 'react'
import { Menu, MenuButton, MenuList, Image, Box, BoxProps } from '@chakra-ui/react'
import { DropdownStyleConfig } from './DropdownStyleConfig'
import { Item } from './Item'
import ArrowIcon from './dropdown-arrow.svg'

export interface Option {
  value: string
  label: string
  image?: string
}

type Size = 'sm' | 'md' | 'lg'

export interface DropdownProps extends BoxProps {
  children: Option[]
  onSelection: (optionSelected: string) => void
  placeholder?: string
  selected?: Option
  size?: Size
  disabled?: boolean
  itemWidth?: string
}

/**
 * @summary A Dropdown component, able to receive options with and without images/thumbnails.
 * @param {Option[]} children (Option[]) Array of options to display. Each option must have the properties: `value` (string), `label` (string), and optionally can have an `image` (svg asset imported).
 * @param {Function} onSelection (Function) Function that gets called when selecting an option from the list. It receives the value of the option selected as parameter.
 * @param {string} placeholder (string) (optional) Placeholder to override the default one ('Pick').
 * @param {Option} selected (Option) (optional) An option to display as selected.
 * @param {Size} size (Size) (optional) One of the predefined sizes for the component: 'sm' | 'md' | 'lg'. It defaults to 'md'.
 * @param {boolean} disabled (boolean) (optional) Controls whether or not the dropdown will be disabled.
 */

export const Dropdown: FC<DropdownProps> = ({
  children: optionsArray,
  placeholder = 'Pick',
  onSelection,
  selected,
  size,
  disabled,
  itemWidth,
}) => {
  const [width, setWidth] = useState<number>(0)

  const containerRef = useRef<HTMLDivElement>(null)

  // workaround to take the actual container's width, only after the element has been rendered and we have the size (as refs don't cause re-render)
  useEffect(() => {
    setWidth(containerRef?.current?.offsetWidth)
  }, [])

  const pick = (optionSelected: Option) => onSelection(optionSelected.value)

  return (
    <Box ref={containerRef} w="full">
      <Menu styleConfig={DropdownStyleConfig} size={size}>
        <MenuButton aria-label="dropdown-button" disabled={disabled}>
          {selected?.label || placeholder}
          <Image src={ArrowIcon} />
        </MenuButton>
        <MenuList w={itemWidth ? itemWidth : width}>
          {optionsArray.map((option) => (
            <Item key={option.value} item={option} onPick={pick} />
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}
