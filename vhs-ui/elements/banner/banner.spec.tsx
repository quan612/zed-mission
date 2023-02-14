import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from '.'

it('should render with the correct text', () => {
  render(
    <Banner text="Banner Text" title="Banner Title" backgroundImage="" buttonText="Button Text" />,
  )
  const renderedText = screen.getByText('Banner Text')
  expect(renderedText).toBeInTheDocument()
  const renderedTitle = screen.getByText('Banner Title')
  expect(renderedTitle).toBeInTheDocument()
  const renderedButton = screen.getByText('Button Text')
  expect(renderedButton).toBeInTheDocument()
})
