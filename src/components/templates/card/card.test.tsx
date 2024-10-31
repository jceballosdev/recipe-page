import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './card';
import { Recipe } from '@/types';

describe('Card Component', () => {
  const mockRecipe: Recipe = {
		id: '1',
    imageSrc: 'valid-image.webp',
    title: 'Test Recipe',
    description: 'A delicious test recipe description.',
    preparationTime: [{ id: '1', position: 1, name: 'Prep', description: '10 minutes' }],
    ingredients: [{ id: '1', position: 1, name: 'Ingredient', description: '1 cup' }],
    instructions: [{ id: '1', position: 1, name: '', description: 'First step' }],
    nutrition: [{ id: '1', position: 1, label: 'Calories', value: '200 kcal' }],
  };

  it('renders the Card component with image and body content', () => {
    render(<Card recipe={mockRecipe} />);

    // Verifica que el título de la receta esté en el documento
    expect(screen.getByText(mockRecipe.title)).toBeInTheDocument();

    // Verifica que la descripción esté en el documento
    expect(screen.getByText(mockRecipe.description)).toBeInTheDocument();

    // Verifica que se haya rendereado la imagen con el atributo alt correspondiente
    const imageElement = screen.getByAltText(mockRecipe.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', `/src/assets/images/${mockRecipe.imageSrc}`);
  });

  it('renders the Body component with the correct recipe details', () => {
    render(<Card recipe={mockRecipe} />);

    // Verifica que el título, descripción, preparación, ingredientes e instrucciones estén presentes en el Body
    expect(screen.getByText('Preparation time')).toBeInTheDocument();
    expect(screen.getByText('Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Instructions')).toBeInTheDocument();
    expect(screen.getByText('Nutrition')).toBeInTheDocument();
  });
});
