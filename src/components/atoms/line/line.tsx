'use client';
import React from 'react';
import styles from './line.module.css';

/**
 * A simple Line component that renders a horizontal divider.
 *
 * This component can be used to visually separate sections of content.
 *
 * @returns {JSX.Element} A styled line divider.
 */
const Line: React.FC = (): JSX.Element => {
	return <div className={styles.line} role='separator' />;
};

export default Line;
