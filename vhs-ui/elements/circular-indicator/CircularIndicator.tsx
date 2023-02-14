import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { useD3 } from './useD3'
import { Shape } from './Shapes'
import * as d3 from 'd3'

type Arc = {
  value: number
  color: string
}
interface ICircularIndicatorOptions {
  /**
   * The size of the circular progress in CSS units
   */
  size?: string | number
  /**
   * Maximum value defining 100% progress made (must be higher than 'min')
   */
  max?: number
  /**
   * Minimum value defining 'no progress' (must be lower than 'max')
   */
  min?: number
  /**
   * This defines the stroke width of the svg circle.
   */
  thickness?: number
  /**
   * Current progress (must be between min/max)
   */
  data?: Array<Arc>
  /**
   * The content of the circular progress bar. If passed, the content will be inside and centered in the progress bar.
   */
  children?: React.ReactNode
  /**
   * SVG Color Defs
   */
  defs?: Array<React.ReactNode>
  /**
   * The color name of the progress track. Use a color key in the zedTheme object
   */
  baseColor?: string
  /**
   * The color of the progress indicator. Use a color key in the zedTheme object
   */
  indicatorColor?: string
  /**
   * The desired valueText to use in place of the value
   */
  valueText?: string
  /**
   * A function that returns the desired valueText to use in place of the value
   */
  getValueText?(value: number, percent: number): string
}

/**
 * CircularIndicator is used to indicate a value in a circular shape
 * This is pretty basic, we should opt out for an implementation using svg's "Elliptical Arc Commands"
 * https://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
 */
export const CircularIndicator: React.FC<ICircularIndicatorOptions> = (props) => {
  const {
    size = '28px',
    thickness = 10,
    valueText,
    getValueText,
    data,
    children,
    defs,
    ...rest
  } = props

  const rootStyles: CSSProperties = {
    display: 'flex',
    position: 'relative',
    verticalAlign: 'middle',
    fontSize: size,
    width: size,
    height: size,
  }
  const ref = useD3(
    (svg) => {
      const pieGenerator = d3
        .pie()
        .value(function (d) {
          return d.value
        })
        .sort(function (a, b) {
          return a.idx < b.idx
        })
      const arcData = pieGenerator(data)

      const arcGenerator = d3
        .arc()
        .innerRadius(50 - thickness)
        .outerRadius(50)
        .padAngle(0.02)
        .padRadius(100)

      svg
        .append('g')
        .attr('transform', 'translate(50, 50)')
        .selectAll('path')
        .data(arcData)
        .join('path')
        .attr('d', arcGenerator)
        .style('fill', function (d) {
          return d.data.color
        })
    },
    [data],
  )

  return (
    <div {...rest} style={rootStyles}>
      <Shape ref={ref} size={size}>
        {defs}
      </Shape>
      {children}
    </div>
  )
}

export const CircularIndicatorLabel = styled.div`
  font-size: 1.2rem;
  line-height: 1rem;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: default;
`
