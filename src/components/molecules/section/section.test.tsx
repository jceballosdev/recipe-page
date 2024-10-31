import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Section, { SectionProps } from './section';
import styles from './section.module.css';

describe('Section Component', () => {
  const defaultProps: SectionProps = {
    children: <p>Test Content</p>,
  };

  it('renders the section with children', () => {
    render(<Section {...defaultProps} />);
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('renders a title when provided', () => {
    render(<Section {...defaultProps} title="Test Title" />);
    const title = screen.getByRole('heading', { name: 'Test Title' });
    expect(title).toBeInTheDocument();
    expect(title.tagName.toLowerCase()).toBe('h2');
  });

  it('applies the correct aria-labelledby when title is provided', () => {
    const { container } = render(<Section {...defaultProps} title="Test Title" />);
    const section = container.querySelector('section');
    const title = screen.getByRole('heading', { name: 'Test Title' });
    expect(section).toHaveAttribute('aria-labelledby', title.id);
  });

  it('applies the aria-labelledby if ariaLabelledby prop is provided', () => {
    render(<Section {...defaultProps} title="Test Title" ariaLabelledby="custom-id" />);
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-labelledby', 'custom-id');
  });

  it('applies the aria-describedby if ariaDescribedby prop is provided', () => {
    render(<Section {...defaultProps} ariaDescribedby="description-id" />);
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-describedby', 'description-id');
  });

  it('does not render a title element if the title prop is not provided', () => {
    render(<Section {...defaultProps} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('applies the correct class for styling', () => {
    render(<Section {...defaultProps} />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass(styles.section);
  });
});
