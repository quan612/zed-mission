import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArrowDownBadge } from '../'

describe('ArrowDownBadge', () => {
  it('renders', () => {
    render(<ArrowDownBadge />)
    expect(screen.getByTestId('arrow-down-badge')).toBeInTheDocument()
  })
})
