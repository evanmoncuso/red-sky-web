import { render, cleanup } from '@redwoodjs/testing'

import WeatherMain from './WeatherMain'

describe('WeatherMain', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherMain />)
    }).not.toThrow()
  })
})
