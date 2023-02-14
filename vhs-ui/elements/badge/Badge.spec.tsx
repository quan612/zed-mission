import React from 'react'
import { render, screen } from '@testing-library/react'
import Badge from './Badge'
import intl from 'react-intl-universal'
import { LOCALE_DATA } from '@/hooks/useLanguage'

describe('<Badge>', () => {
  beforeAll(() => {
    intl.init({ currentLocale: 'en-AU', locales: LOCALE_DATA, fallbackLocale: 'en-AU' })
  })
  it('should render with the correct text', () => {
    render(<Badge>Class III</Badge>)
    const rendered = screen.getByText('Class III')
    expect(rendered).toBeInTheDocument()
  })
})
