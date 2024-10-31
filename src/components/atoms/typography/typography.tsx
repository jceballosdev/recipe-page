'use client';
import React from 'react';
import styles from './typography.module.css';

/**
 * Props for the Typography component.
 * @property {React.ReactNode} children - The text or elements to render.
 * @property {'h1' | 'h2' | 'h3' | 'p' | 'span'} variant - The HTML tag to use, determining the semantic and visual style.
 * @property {boolean} [bold] - Optional; if true, applies a bold style to the text.
 * @property {string} [id] - Optional; the ID attribute for the text element.
 */
export interface TypographyProps {
	children: React.ReactNode;
	variant: 'h1' | 'h2' | 'h3' | 'p' | 'span';
	bold?: boolean;
	id?: string;
}

/**
 * Typography component for rendering styled text with different HTML tags.
 *
 * Uses CSS Modules for styling, with an optional bold style.
 *
 * @param {TypographyProps} props - Props to configure the Typography component.
 * @returns {JSX.Element} The rendered text element with the specified styling.
 */
const Typography: React.FC<TypographyProps> = ({
	children,
	variant,
	bold = false,
	id,
}: TypographyProps): JSX.Element => {
	// Selects the style based on variant and bold options
	const style = bold
		? `${styles[variant]} ${styles.bold}`
		: styles[variant];

	// Dynamically creates the specified element type with the chosen style and children
	return React.createElement(variant, { id, className: style }, children);
};

export default Typography;
