import { render, cleanup } from '@redwoodjs/testing'

import WeatherDetails from './WeatherDetails'

describe('WeatherDetails', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherDetails />)
    }).not.toThrow()
  })
})
