import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Body, { BodyProps } from './body';

describe('Body Component', () => {
	const defaultProps: BodyProps = {
		title: 'Recipe Title',
		description: 'A delicious recipe description.',
		preparation: [
			{
				id: '1',
				position: 1,
				name: 'Preparation Step',
				description: '10 minutes',
			},
		],
		ingredients: [
			{
				id: '1',
				position: 1,
				name: 'Ingredient',
				description: '1 cup',
			},
		],
		instructions: [
			{
				id: '1',
				position: 1,
				name: '',
				description: 'Do this first.',
			},
		],
		nutrition: [
			{ id: '1', position: 1, label: 'Calories', value: '200 kcal' },
		],
	};

	it('renders the title and description', () => {
		render(<Body {...defaultProps} />);
		expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
		expect(
			screen.getByText(defaultProps.description),
		).toBeInTheDocument();
	});

	it('renders preparation, ingredients, instructions, and nutrition sections', () => {
		render(<Body {...defaultProps} />);
		expect(screen.getByText('Preparation time')).toBeInTheDocument();
		expect(screen.getByText('Ingredients')).toBeInTheDocument();
		expect(screen.getByText('Instructions')).toBeInTheDocument();
		expect(screen.getByText('Nutrition')).toBeInTheDocument();
	});

	it('does not render empty sections if data is missing', () => {
		render(
			<Body {...defaultProps} ingredients={[]} nutrition={[]} />,
		);
		expect(screen.queryByText('Ingredients')).toBeNull();
		expect(screen.queryByText('Nutrition')).toBeNull();
	});

	it('includes ARIA labels and descriptions for accessibility', () => {
    render(<Body {...defaultProps} />);
    
    // Verifica el atributo `aria-labelledby` en el título del `section`
    const introSection = screen.getByRole('region', { name: /Recipe Title/i });
    expect(introSection).toHaveAttribute('aria-labelledby', 'recipe-title');
    
    // Verifica `aria-labelledby` y `aria-describedby` en `preparation`
    const preparationAside = screen.getByRole('complementary', { name: /Preparation time/i });
    expect(preparationAside).toHaveAttribute('aria-labelledby', 'preparation');

		const ingredientsSection = screen.getByRole('region', { name: /Ingredients/i });
		expect(ingredientsSection).toHaveAttribute('aria-labelledby', 'ingredients');
    
    // Verifica `aria-labelledby` en el `section` de `instructions`
    const instructionsSection = screen.getByRole('region', { name: /Instructions/i });
    expect(instructionsSection).toHaveAttribute('aria-labelledby', 'instructions');
    
    // Verifica `aria-labelledby` en el `section` de `nutrition`
    const nutritionSection = screen.getByRole('region', { name: /Nutrition/i });
    expect(nutritionSection).toHaveAttribute('aria-labelledby', 'nutrition');
  });
});
