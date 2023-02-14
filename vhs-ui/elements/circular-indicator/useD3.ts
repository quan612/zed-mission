import React, { useLayoutEffect } from 'react'
import { select } from 'd3'

export const useD3 = (renderChartFn, dependencies: Array<any>) => {
  const ref = React.useRef()

  useLayoutEffect(() => {
    renderChartFn(select(ref.current))
  }, [...dependencies])
  return ref
}
