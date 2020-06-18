import { render, cleanup } from '@redwoodjs/testing'

import PageHeader from './PageHeader'

describe('PageHeader', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PageHeader />)
    }).not.toThrow()
  })
})
