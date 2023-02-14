import React, { FC } from 'react'
import { MenuItem, Image, Flex, Text } from '@chakra-ui/react'

interface Option {
  value: string
  label: string
  image?: string
}

interface ItemProps {
  item: Option
  onPick: (item: Option) => void
}

/**
 * @summary Individual Item for the Dropdown component.
 * @param {Option} item (Option) The option to display as an item.
 * @param {Function} onPick (Function) Function that gets called when selecting the item in a list. It receives the item selected as parameter.
 */

export const Item: FC<ItemProps> = ({ item, onPick }) => (
  <MenuItem key={item.value} onClick={() => onPick(item)}>
    <Flex gap="4" align="center" justify="center">
      {item.image && <Image src={item.image} borderRadius="md" />}
      <Text m="0">{item.label}</Text>
    </Flex>
  </MenuItem>
)
