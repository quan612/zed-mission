import { FC } from 'react'
import styled from 'styled-components'

interface ShapeProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  size: string | number
  ref: React.Ref<SVGSVGElement>
}

export const Shape: FC<ShapeProps> = styled.svg.attrs((props) => ({
  viewBox: '0 0 100 100',
  width: '100%',
  height: '100%',
  ...props,
}))``

export const Circle = styled.circle.attrs((props) => ({
  cx: 21, // center of viewbox defined below in Shape Component
  cy: 21,
  r: 15.91549430918954, // radius/circumference relation => r = C / (2π) => C=100 => 100 / (2π)
  fill: 'transparent',
  ...props,
}))``
