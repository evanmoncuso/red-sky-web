import { render, cleanup } from '@redwoodjs/testing'

import WeatherChart from './WeatherChart'

describe('WeatherChart', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherChart />)
    }).not.toThrow()
  })
})
