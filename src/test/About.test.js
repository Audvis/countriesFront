import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About/About';


//*refactor
beforeEach(() => render(<About />))

describe('Title in About', () => {
  it('must display a title', () => {
    // render(<About />) refactor
    expect(screen.queryByText(/about/i)).toBeInTheDocument();
  })
})

describe('Render a name in About', () => {
  it('must display a Gerardo Pedraza', () => {
    // render(<About />) refactor
    expect(screen.queryByText(/Gerardo Pedraza/)).toBeInTheDocument();
  })
})