import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import React from 'react'
import LineDivider from '../LineDivider/LineDivider'

describe('<LineDivider>', () => {
  describe('does not show drawer if isOpen=false', () => {
    render(<LineDivider />)
    it('does not show drawer if not open', () => {
      expect(screen.getByText('New')).toBeInTheDocument()
    })
  })
})
