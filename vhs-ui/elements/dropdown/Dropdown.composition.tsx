import React, { useState } from 'react'
import { Flex, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Dropdown, Option } from '.'
import NamePlate from './nameplate.svg'

const options = [
  { label: 'Pick 1', value: 'pick1' },
  { label: 'Pick 2', value: 'pick2' },
  { label: 'Pick 3', value: 'pick3' },
]

const optionsWithImage = options.map(({ label, value }) => ({ label, value, image: NamePlate }))

const theme = extendTheme({
  colors: {
    gray: {
      400: '#3b3f46',
      500: '#636464',
      700: '#858F98',
      900: '#292829',
    },
    white: {
      default: '#fff',
      500: '#f0f8ffa3',
      700: '#F0F8FF',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: '',
        color: '',
        bg: '',
        lineHeight: '',
      },
    },
  },
})

export const BasicDropdown = () => {
  const [selected, setSelected] = useState<Option>()

  const handleSelection = (optionSelected: string) => {
    const selectedOption = options.find((option) => option.value === optionSelected)
    setSelected(selectedOption)
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex w={400} h={500} bg="#1F1F1F" direction="column" justify="center" gap={3} p={8}>
        <Dropdown onSelection={handleSelection} selected={selected} size="sm">
          {options}
        </Dropdown>
        <Dropdown onSelection={handleSelection} selected={selected} size="md">
          {options}
        </Dropdown>
        <Dropdown onSelection={handleSelection} selected={selected} size="lg">
          {options}
        </Dropdown>
      </Flex>
    </ChakraProvider>
  )
}

export const DropdownWithImages = () => {
  const [selected, setSelected] = useState<Option>()

  const handleSelection = (optionSelected: string) => {
    const selectedOption = options.find((option) => option.value === optionSelected)
    setSelected(selectedOption)
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex w={400} h={500} bg="#1F1F1F" direction="column" justify="center" gap={3} p={8}>
        <Dropdown onSelection={handleSelection} selected={selected} size="sm">
          {optionsWithImage}
        </Dropdown>
        <Dropdown onSelection={handleSelection} selected={selected} size="md">
          {optionsWithImage}
        </Dropdown>
        <Dropdown onSelection={handleSelection} selected={selected} size="lg">
          {optionsWithImage}
        </Dropdown>
      </Flex>
    </ChakraProvider>
  )
}
