import React, { FC, useState, useEffect, useRef } from 'react'
import { Button, useMultiStyleConfig, chakra, CSSObject, ButtonProps, Box } from '@chakra-ui/react'

interface SVGPros {
  width: number
  height: number
  radius: number
  styles: CSSObject
  setIsAnimating: (isAnimating: boolean) => void
}

const svgXmlns = 'http://www.w3.org/2000/svg'

/**
 * @summary Individual glow stroke for GlowButton.
 * @param {number} width (number) Width of the button whose perimeter this stroke runs along.
 * @param {number} height (number) Height of the button whose perimeter this stroke runs along.
 * @param {number} radius (number) Radius of the button whose perimeter this stroke runs along.
 * @param {CSSObject} styles (CSSObject) Styles for this section.
 * @param {Function} setIsAnimating (Function) Function that when called starts or stops the glow animation, depending on the parameter provided (boolean).
 */

export const GlowStroke: FC<SVGPros> = ({ width, height, radius, styles, setIsAnimating }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const viewBox = `0 0 ${width} ${height}`

  useEffect(() => {
    svgRef.current.addEventListener('animationend', () => setIsAnimating(false))
  }, [setIsAnimating, styles])

  return (
    <chakra.svg ref={svgRef} __css={styles} viewBox={viewBox} xmlns={svgXmlns}>
      <rect
        xmlns={svgXmlns}
        x="0"
        y="0"
        width={width}
        height={height}
        rx={radius}
        ry={radius}
        pathLength="10"
      />
    </chakra.svg>
  )
}

/**
 * @summary Regular Zed Button, but with a nice glow animation added when hovering.
 * @description The structure here is basically a container with a group of 4 svg lines for the top side
 * of the glow, and another group of 4 lines for the bottom side. Each line in a group has slightly different width and blur,
 * and in order to go through the border of the button they take the width, height and border radius from it.
 */

export const GlowButton: FC<ButtonProps> = ({ children, ...props }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const styles = useMultiStyleConfig('GlowButton', {
    isAnimating,
  })

  useEffect(() => {
    buttonRef.current.addEventListener('pointerenter', () => setIsAnimating(true))
  }, [])

  return (
    <Button ref={buttonRef} {...props}>
      {children}
      {!props.disabled && buttonRef.current && (
        <Box __css={styles.container}>
          {[1, 2].map((number) => (
            <Box __css={styles.linesGroup} key={number} _last={{ transform: 'rotate(180deg)' }}>
              {[1, 2, 3, 4].map((number, index) => (
                <GlowStroke
                  styles={{ ...styles.svgLine, ...styles[`svgLine${index + 1}`] }}
                  key={number}
                  width={Number(buttonRef.current.offsetWidth + 5)}
                  height={Number(buttonRef.current.offsetHeight)}
                  radius={Number(getComputedStyle(buttonRef.current).borderRadius.slice(0, -2))}
                  setIsAnimating={setIsAnimating}
                />
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Button>
  )
}
