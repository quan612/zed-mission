import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowUpBadge } from '../'

describe('ArrowUpBadge', () => {
  it('renders', () => {
    render(<ArrowUpBadge />)
    expect(screen.getByTestId('arrow-up-badge')).toBeInTheDocument()
  })
})
