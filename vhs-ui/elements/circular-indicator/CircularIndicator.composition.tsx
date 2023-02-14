import React from 'react'

import { CircularIndicator, CircularIndicatorLabel } from '.'

export const Basic = () => {
  return (
    <CircularIndicator
      data={[
        { value: 50, color: 'blue' },
        { value: 50, color: 'red' },
      ]}
      size="64px"
      thickness={10}
    ></CircularIndicator>
  )
}

export const WithLabel = () => {
  return (
    <CircularIndicator
      data={[
        { value: 25, color: 'cyan' },
        { value: 75, color: 'orange' },
      ]}
      size="64px"
      thickness={10}
    >
      <CircularIndicatorLabel style={{ color: 'black' }}>25</CircularIndicatorLabel>
    </CircularIndicator>
  )
}
