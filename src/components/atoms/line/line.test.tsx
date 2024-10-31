import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Line from './line';
import styles from './line.module.css';

describe('Line Component', () => {
  it('renders the line component', () => {
    render(<Line />);
    const lineElement = screen.getByRole('separator'); 
    expect(lineElement).toBeInTheDocument();
  });

  it('applies the correct class for styling', () => {
    render(<Line />);
    const lineElement = screen.getByRole('separator');

    expect(lineElement).toHaveClass(styles.line);
  });
});