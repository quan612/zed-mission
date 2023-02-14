import React from 'react'
import { Theme, ThemeProvider } from '@emotion/react'

const ZedThemeProvider = ({ theme, children }: { theme: Theme; children: React.Component }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ZedThemeProvider
