import { render, screen } from '@testing-library/react'

import ExternalLink from './ExternalLink'

describe('<ExternalLink />', () => {
  it('render', () => {
    const href = 'https://foobar.com'
    const title = 'foo'
    const description = 'bar'
    render(<ExternalLink href={href} title={title} description={description} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', href)
    expect(screen.getByRole('heading', { level: 2, name: title }))
    expect(screen.getByText(description))
  })
})
