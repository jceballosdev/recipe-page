'use client';
import { Typography } from '@/components/atoms';
import React from 'react';
import styles from './aside.module.css';

/**
 * Props for the Aside component.
 * @property {string} title - The title displayed at the top of the aside.
 * @property {React.ReactNode} children - The content displayed within the aside.
 * @property {string} [ariaLabelledby] - The ARIA labelledby attribute for the aside.
 * @property {string} [ariaDescribedby] - The ARIA describedby attribute for the aside.
 */
export type AsideProps = {
	title: string;
	children: React.ReactNode;
	ariaLabelledby?: string;
	ariaDescribedby?: string;
};

/**
 * Aside component to display a titled section of content, typically used for additional
 * or related information that complements the main content.
 *
 * @param {AsideProps} props - Props to configure the Aside component.
 * @returns {JSX.Element} The rendered aside section with a title and content.
 */
const Aside: React.FC<AsideProps> = ({
	title,
	children,
	ariaDescribedby,
	ariaLabelledby,
}: AsideProps): JSX.Element => {

	// Assign a default id for the title if ariaLabelledby is not provided
	const defaultId = ariaLabelledby || 'aside-title';

	return (
		<aside
			className={styles.aside}
			{...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
			{...(ariaDescribedby && {
				'aria-describedby': ariaDescribedby,
			})}
		>
			<Typography variant='h3' id={defaultId}>
				{title}
			</Typography>
			{children}
		</aside>
	);
};

export default Aside;
