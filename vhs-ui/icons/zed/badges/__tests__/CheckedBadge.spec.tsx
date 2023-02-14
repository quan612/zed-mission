import React from 'react'
import { render, screen } from '@testing-library/react'
import { CheckedBadge } from '../'

describe('CheckedBadge', () => {
  it('renders', () => {
    render(<CheckedBadge />)
    expect(screen.getByTestId('checked-badge')).toBeInTheDocument()
  })
})
