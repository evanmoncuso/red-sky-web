import { render, cleanup } from '@redwoodjs/testing'

import WeatherHeader from './WeatherHeader'

describe('WeatherHeader', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherHeader />)
    }).not.toThrow()
  })
})
