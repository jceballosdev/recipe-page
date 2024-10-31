import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Typography, { TypographyProps } from './typography';
import styles from './typography.module.css';

describe('Typography Component', () => {
	const defaultProps: TypographyProps = {
		children: 'Test Text',
		variant: 'p',
	};
	const variants: TypographyProps['variant'][] = [
		'h1',
		'h2',
		'h3',
		'p',
		'span',
	];

	variants.forEach((variant) => {
		it(`renders the ${variant} variant`, () => {
			render(<Typography {...defaultProps} variant={variant} />);
			const element = screen.getByText(
				defaultProps.children as string,
			);
			expect(element.tagName.toLowerCase()).toBe(variant);
		});
	});

  variants.forEach((variant) => {
    it(`applies the bold style when the bold prop is true for ${variant}`, () => {
      render(<Typography {...defaultProps} variant={variant} bold />);
      const element = screen.getByText(defaultProps.children as string);
      expect(element).toHaveClass(styles.bold);
    });
  })

	it('does not apply the bold style when the bold prop is false', () => {
		render(<Typography {...defaultProps} variant='p' />);
		const element = screen.getByText(defaultProps.children as string);
		expect(element).not.toHaveClass(styles.bold);
	});

	it('renders with the provided id attribute', () => {
		const id = 'test-id';
		render(<Typography {...defaultProps} variant='p' id={id} />);
		const element = screen.getByText(defaultProps.children as string);
		expect(element).toHaveAttribute('id', id);
	});
});
