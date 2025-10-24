import { render, screen } from '@testing-library/react'
import { Card } from './cards'

describe('Card Component', () => {
  it('renders with title and value', () => {
    render(<Card title="Total Invoices" value={10} type="invoices" />)
    
    expect(screen.getByText('Total Invoices')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('renders all card types', () => {
    const types = ['invoices', 'customers', 'pending', 'collected'] as const
    
    types.forEach(type => {
      const { unmount } = render(<Card title={`Test ${type}`} value={100} type={type} />)
      expect(screen.getByText(`Test ${type}`)).toBeInTheDocument()
      unmount()
    })
  })
})