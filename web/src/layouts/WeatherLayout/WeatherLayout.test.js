import { render, cleanup } from '@redwoodjs/testing'

import WeatherLayout from './WeatherLayout'

describe('WeatherLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherLayout />)
    }).not.toThrow()
  })
})
