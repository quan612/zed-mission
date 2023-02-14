import React from 'react'
import { render, screen } from '@testing-library/react'
import { PlusBadge } from '../'

describe('PlusBadge', () => {
  it('renders', () => {
    render(<PlusBadge />)
    expect(screen.getByTestId('plus-badge')).toBeInTheDocument()
  })
})
