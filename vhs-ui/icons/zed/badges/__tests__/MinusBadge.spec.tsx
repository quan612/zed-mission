import React from 'react'
import { render, screen } from '@testing-library/react'
import { MinusBadge } from '../'

describe('MinusBadge', () => {
  it('renders', () => {
    render(<MinusBadge />)
    expect(screen.getByTestId('minus-badge')).toBeInTheDocument()
  })
})
