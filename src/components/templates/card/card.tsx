'use client';
import { Image } from '@/components/atoms';
import { Body } from '@/components/organisms';
import React from 'react';
import styles from './card.module.css';
import { Recipe } from '@/types';

/**
 * Props for the Card component.
 * @property {Recipe} recipe - The recipe details, including image, title, description, preparation, ingredients, instructions, and nutrition.
 */
export interface CardProps  {
	recipe: Recipe;
};

/**
 * Card component that displays a recipe image and detailed information in a structured layout.
 *
 * This component uses the `Image` component for the recipe image and `Body` component for the recipe details.
 *
 * @param {CardProps} props - Props to configure the Card component.
 * @returns {JSX.Element} A card displaying the recipe image and details.
 */
const Card: React.FC<CardProps> = ({ recipe }) => {
	return (
		<div className={styles.card}>
			<Image src={recipe.imageSrc} alt={recipe.title} />
			<Body
				title={recipe.title}
				description={recipe.description}
				preparation={recipe.preparationTime}
				ingredients={recipe.ingredients}
				instructions={recipe.instructions}
				nutrition={recipe.nutrition}
			/>
		</div>
	);
};

export default Card;
