import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { BasicModal } from './Modal.composition'

it('should render with the correct text when modal is open', async () => {
  render(<BasicModal />)
  const button = screen.getByRole('button', { name: 'open-modal-button' })

  fireEvent.click(button)
  expect(screen.getByText('Modal Title')).toBeInTheDocument()
  expect(screen.getByText('Some content')).toBeInTheDocument()
  expect(screen.getByText('Close')).toBeInTheDocument()
  expect(screen.getByText('Secondary Action')).toBeInTheDocument()
})
