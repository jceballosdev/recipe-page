import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Aside, { AsideProps } from './aside';
import styles from './aside.module.css';

describe('Aside Component', () => {
	const defaultProps: AsideProps = {
		title: 'Sample Title',
		children: <p>Sample content within the aside.</p>,
	};

	it('renders the title and children correctly', () => {
		render(<Aside {...defaultProps} />);
		const titleElement = screen.getByText(defaultProps.title);
		const contentElement = screen.getByText(
			'Sample content within the aside.',
		);

		expect(titleElement).toBeInTheDocument();
		expect(contentElement).toBeInTheDocument();
	});

	it('applies the correct class for styling', () => {
		render(<Aside {...defaultProps} />);
		const asideElement = screen.getByRole('complementary');

		expect(asideElement).toHaveClass(styles.aside);
	});

	it('renders with the aria-labelledby attribute when provided', () => {
		render(<Aside {...defaultProps} ariaLabelledby='sample-label' />);
		const asideElement = screen.getByRole('complementary');

		expect(asideElement).toHaveAttribute(
			'aria-labelledby',
			'sample-label',
		);
	});

	it('renders with the aria-describedby attribute when provided', () => {
		render(
			<Aside
				{...defaultProps}
				ariaDescribedby='sample-description'
			/>,
		);
		const asideElement = screen.getByRole('complementary');

		expect(asideElement).toHaveAttribute(
			'aria-describedby',
			'sample-description',
		);
	});

	it('assigns a default id to the title element if ariaLabelledby is not provided', () => {
		render(<Aside {...defaultProps} />);
		const titleElement = screen.getByText(defaultProps.title);

		expect(titleElement).toHaveAttribute('id', 'aside-title');
	});

	it('renders the title with the provided id when ariaLabelledby is specified', () => {
		render(<Aside {...defaultProps} ariaLabelledby='custom-id' />);
		const titleElement = screen.getByText(defaultProps.title);

		expect(titleElement).toHaveAttribute('id', 'custom-id');
	});
});
