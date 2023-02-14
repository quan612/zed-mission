import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import userEvent from '@testing-library/user-event'
import { Dropdown, DropdownProps } from '.'

const theme = extendTheme({
  colors: {
    gray: {
      400: '#3b3f46',
      500: '#636464',
      700: '#858F98',
      900: '#292829',
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

const options = [
  { label: 'Pick 1', value: 'pick1' },
  { label: 'Pick 2', value: 'pick2' },
  { label: 'Pick 3', value: 'pick3' },
]

// const optionsWithImage = options.map(({ label, value }) => ({ label, value, image: NamePlate }))

const renderWithProps = (props?: Partial<DropdownProps>) =>
  render(
    <ChakraProvider theme={theme}>
      <Dropdown
        onSelection={() => {
          return
        }}
        {...props}
      >
        {options.map(({ label, value }) => ({ label, value }))}
      </Dropdown>
    </ChakraProvider>,
  )

it('executes onSelection when selecting an option, with the correct params and the correct number of times', () => {
  const props: Partial<DropdownProps> = {
    onSelection: jest.fn(),
  }

  renderWithProps(props)

  // getting it by text or others selects other elements with click events disabled
  const dropdown = screen.getByRole('button', { name: 'dropdown-button' })

  options.map((option) => {
    userEvent.click(dropdown)

    const optionItem = screen.getByText(option.label)
    userEvent.click(optionItem)

    expect(props.onSelection).toHaveBeenCalledWith(option.value)
  })

  expect(props.onSelection).toHaveBeenCalledTimes(options.length)
})

it('displays the correct labels for the options provided', () => {
  renderWithProps()

  const dropdown = screen.getByRole('button', { name: 'dropdown-button' })
  userEvent.click(dropdown)

  options.map(({ label }) => {
    const option = screen.getByText(label)

    expect(option).toBeInTheDocument()
  })
})

it('displays the custom placeholder, if provided', () => {
  const props: Partial<DropdownProps> = {
    placeholder: 'My placeholder',
  }

  renderWithProps(props)

  const placeholder = screen.getByText(props.placeholder)
  expect(placeholder).toBeInTheDocument()
})

it('displays the correct label for an option selected, if provided', () => {
  const props: Partial<DropdownProps> = {
    selected: options[0],
  }

  renderWithProps(props)

  const dropdown = screen.getByRole('button', { name: 'dropdown-button' })

  // without the `within` it gets also the label in the options list, which is a dropdown button's sibling
  const selectedOptionLabel = within(dropdown).getByText(options[0].label)

  expect(selectedOptionLabel).toBeInTheDocument()
})
