'use client';
import { Typography } from '@/components/atoms';
import React from 'react';
import styles from './section.module.css';

/**
 * Props for the Section component.
 * @property {string} [title] - The optional title displayed at the top of the section.
 * @property {React.ReactNode} children - The content within the section.
 * @property {string} [ariaLabelledby] - The ARIA labelledby attribute for the section.
 * @property {string} [ariaDescribedby] - The ARIA describedby attribute for the section.
 */
export interface SectionProps {
	title?: string;
	children: React.ReactNode;
	ariaLabelledby?: string;
	ariaDescribedby?: string;
}

/**
 * Section component to render a titled section of content.
 *
 * This component is useful for grouping content into distinct sections, with an optional title.
 *
 * @param {SectionProps} props - Props to configure the Section component.
 * @returns {JSX.Element} The rendered section with an optional title and children.
 */
const Section: React.FC<SectionProps> = ({
	title,
	children,
	ariaDescribedby,
	ariaLabelledby,
}: SectionProps): JSX.Element => {
	// Assign a default id for the title if ariaLabelledby is not provided
	const defaultId = React.useId();

	return (
		<section
			className={styles.section}
			aria-labelledby={ariaLabelledby || (title ? defaultId : undefined)}
      aria-describedby={ariaDescribedby}
			role='region'
		>
			{title && (
				<Typography variant='h2' id={ariaLabelledby || defaultId}>
					{title}
				</Typography>
			)}
			{children}
		</section>
	);
};

export default Section;
