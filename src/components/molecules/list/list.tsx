'use client';
import { Typography } from '@/components/atoms/typography';
import { ListItem } from '@/types';
import React from 'react';
import styles from './list.module.css';

/**
 * Props for the List component.
 * @property {ListItem[]} items - The list items to display.
 * @property {boolean} [ordered=false] - If true, renders an ordered list (ol); otherwise, renders an unordered list (ul).
 */
export interface ListProps {
	items: ListItem[];
	ordered?: boolean;
}

/**
 * List component to render a list of items, either ordered or unordered.
 *
 * Each item displays a name (optional) in bold, followed by a description in regular text.
 *
 * @param {ListProps} props - Props to configure the List component.
 * @returns {JSX.Element} A styled list of items.
 */
const List: React.FC<ListProps> = ({ items, ordered = false }: ListProps): JSX.Element => {
	// Conditionally set the list tag based on the `ordered` prop
	const ListTag = ordered ? 'ol' : 'ul';

	return (
		<ListTag className={styles.list}>
			{items.map((item) => (
				<li key={item.id}>
					{item.name && <strong>{item.name}: </strong>}
					<Typography variant='span'>{item.description}</Typography>
				</li>
			))}
		</ListTag>
	);
};

export default List;
