import recipes from '@/data/recipes';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Recipe from './recipe';

describe('Recipe Page', () => {
	it('renders the main recipe card with the first recipe', () => {
		render(<Recipe />);

		const titleElement = screen.getByText(recipes[0].title);
		expect(titleElement).toBeInTheDocument();

		const descriptionElement = screen.getByText(
			recipes[0].description,
		);
		expect(descriptionElement).toBeInTheDocument();
	});
});
