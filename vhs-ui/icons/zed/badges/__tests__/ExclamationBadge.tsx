import React from 'react'
import { render, screen } from '@testing-library/react'
import { ExclamationBadge } from '../'

describe('ExclamationBadge', () => {
  it('renders', () => {
    render(<ExclamationBadge />)
    expect(screen.queryByTestId('exclamation-badge')).toBeInTheDocument()
  })
})
