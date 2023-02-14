import React from 'react'
import Carousel from './Carousel'
import { render, fireEvent, screen } from '@testing-library/react'

describe('<Carousel />', () => {
  it('Renders without errors', () => {
    render(<Carousel items={[]} />)
    const carousel = screen.getByTestId('carousel')
    expect(carousel).toBeInTheDocument()
  })

  it('Renders one item view correctly', async () => {
    const items = [{ content: <>Item 1</> }]
    render(<Carousel items={items} />)
    const carouselListItem = screen.getByTestId('carousel-list-item')

    expect(carouselListItem).toBeInTheDocument()
    expect(await screen.findByText('Item 1')).toBeInTheDocument()
    expect(screen.queryByTestId('carousel-indicators')).not.toBeInTheDocument()
  })

  it('Renders two or more items view correctly', async () => {
    const items = [{ content: <>Item 1</> }, { content: <>Item 2</> }]
    render(<Carousel items={items} />)
    const carouselListItem = screen.getByTestId('carousel-list-item')

    expect(carouselListItem).toBeInTheDocument()
    expect(await screen.findByText('Item 1')).toBeInTheDocument()
    expect(screen.getByTestId('carousel-indicators')).toBeInTheDocument()
  })

  it('Renders correct item after interval', async () => {
    const items = [{ content: <>Item 1</> }, { content: <>Item 2</> }, { content: <>Item 3</> }]
    render(<Carousel items={items} />)
    jest.useFakeTimers()
    expect(await screen.findByText('Item 1')).toBeInTheDocument()
    setTimeout(async () => {
      expect(await screen.findByText('Item 2')).toBeInTheDocument()
      expect(await screen.findByText('Item 1')).not.toBeInTheDocument()
    }, 3000)

    setTimeout(async () => {
      expect(await screen.findByText('Item 3')).toBeInTheDocument()
      expect(await screen.findByText('Item 1')).not.toBeInTheDocument()
      expect(await screen.findByText('Item 2')).not.toBeInTheDocument()
    }, 3000)
  })

  it('Displays the correct items when clicking on indicators', async () => {
    const items = [{ content: <>Item 1</> }, { content: <>Item 2</> }, { content: <>Item 3</> }]

    render(<Carousel items={items} variant="purple" />)

    const buttonPrev = screen.getByRole('button', { name: 'indicators-button-prev' })
    const buttonNext = screen.getByRole('button', { name: 'indicators-button-next' })

    expect(await screen.findByText('Item 1')).toBeInTheDocument()
    fireEvent.click(buttonPrev)
    expect(await screen.findByText('Item 3')).toBeInTheDocument()
    fireEvent.click(buttonNext)
    expect(await screen.findByText('Item 1')).toBeInTheDocument()
  })
})
