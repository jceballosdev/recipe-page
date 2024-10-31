import { Card } from '@/components/templates';
import recipes from '@/data/recipes';
import React from 'react';
import styles from './recipe.module.css';

/**
 * Recipe page component.
 *
 * This component renders the main recipe page, displaying a single recipe card.
 * It uses the first recipe from the imported `recipes` array.
 *
 * @returns {JSX.Element} The recipe page layout with a single recipe card.
 */
const Recipe: React.FC = () => {
	return (
		<main className={styles.recipe}>
			<Card recipe={recipes[0]} />
		</main>
	);
};

export default Recipe;
