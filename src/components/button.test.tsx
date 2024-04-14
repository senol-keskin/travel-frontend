import '@testing-library/jest-dom'

import { render, screen } from '@/test-util'
import Button from './button'

describe('Button Component', () => {
  it('should have link text', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toHaveTextContent('click')
  })
})
