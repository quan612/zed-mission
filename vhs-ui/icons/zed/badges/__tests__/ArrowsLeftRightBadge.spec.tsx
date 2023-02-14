import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowsLeftRightBadge } from '..'

describe('ArrowsLeftRightBadge', () => {
  it('renders', () => {
    render(<ArrowsLeftRightBadge />)
    expect(screen.getByTestId('arrows-left-right-badge')).toBeInTheDocument()
  })
})
