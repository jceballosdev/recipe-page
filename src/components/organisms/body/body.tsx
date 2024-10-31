'use client';
import { Line, Typography } from '@/components/atoms';
import { Aside, List, Section, Table } from '@/components/molecules';
import { ListItem, TableItem } from '@/types';
import React from 'react';
import styles from './body.module.css';

/**
 * Props for the Body component.
 * @property {string} title - The main title for the body content.
 * @property {string} description - A brief description of the content.
 * @property {ListItem[]} preparation - The list of preparation steps.
 * @property {ListItem[]} ingredients - The list of ingredients.
 * @property {ListItem[]} instructions - The list of instructions, displayed as an ordered list.
 * @property {TableItem[]} nutrition - The nutritional information displayed in a table.
 */
export interface BodyProps {
  title: string;
  description: string;
  preparation: ListItem[];
  ingredients: ListItem[];
  instructions: ListItem[];
  nutrition: TableItem[];
}

/**
 * Body component to render the main content of a recipe page.
 *
 * This component organizes the title, description, preparation, ingredients, instructions,
 * and nutrition information into distinct sections with styling.
 *
 * @param {BodyProps} props - Props to configure the Body component.
 * @returns {JSX.Element} The structured layout for the body content.
 */
const Body: React.FC<BodyProps> = ({
  title,
  description,
  preparation,
  ingredients,
  instructions,
  nutrition,
}: BodyProps): JSX.Element => {
  return (
    <div className={styles.body}>
      <Section
        key="introduction"
        ariaLabelledby="recipe-title"
        ariaDescribedby="Introduction to the recipe."
      >
        <Typography variant="h1" id="recipe-title">
          {title}
        </Typography>
        <Typography variant="p">{description}</Typography>
      </Section>
      
      {preparation.length > 0 && (
        <Aside
          title={'Preparation time'}
          ariaLabelledby="preparation"
          ariaDescribedby="Time to prepare the recipe."
        >
          <List items={preparation} />
        </Aside>
      )}
      
      {ingredients.length > 0 && (
        <Section
          key="ingredients"
          title="Ingredients"
          ariaLabelledby="ingredients"
          ariaDescribedby="List of ingredients needed for the recipe."
        >
          <List items={ingredients} />
        </Section>
      )}
      
      <Line />
      
      {instructions.length > 0 && (
        <Section
          key="instructions"
          title="Instructions"
          ariaLabelledby="instructions"
          ariaDescribedby="Step-by-step instructions to prepare the recipe."
        >
          <List items={instructions} ordered />
        </Section>
      )}
      
      <Line />
      
      {nutrition.length > 0 && (
        <Section
          key="nutrition"
          title="Nutrition"
          ariaLabelledby="nutrition"
          ariaDescribedby="Nutritional information per serving."
        >
          <Typography variant="p">
            The table below shows nutritional values per serving without
            the additional fillings.
          </Typography>
          <Table items={nutrition} />
        </Section>
      )}
    </div>
  );
};

export default Body;
