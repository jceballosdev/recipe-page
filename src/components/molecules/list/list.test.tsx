import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import List, { ListProps } from './list';
import styles from './list.module.css';
import { ListItem } from '@/types';

const mockItems: ListItem[] = [
  { id: '1', position: 1, name: 'Item 1', description: 'Description 1' },
  { id: '2', position: 2, name: 'Item 2', description: 'Description 2' },
  { id: '3', position: 3, name: 'Item 3', description: 'Description 3' },
];

describe('List Component', () => {
  const defaultProps: ListProps = {
    items: mockItems,
  };

  it('renders an unordered list by default', () => {
    render(<List {...defaultProps} />);
    const listElement = screen.getByRole('list');
    expect(listElement.tagName.toLowerCase()).toBe('ul');
    expect(listElement).toHaveClass(styles.list);
  });

  it('renders an ordered list when ordered prop is true', () => {
    render(<List {...defaultProps} ordered />);
    const listElement = screen.getByRole('list');
    expect(listElement.tagName.toLowerCase()).toBe('ol');
  });

  it('renders the correct number of list items', () => {
    render(<List {...defaultProps} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockItems.length);
  });

  it('displays each item with bold name and description text', () => {
    render(<List {...defaultProps} />);
    mockItems.forEach((item) => {
      const nameElement = screen.getByText(`${item.name}:`);
      const descriptionElement = screen.getByText(item.description);
      expect(nameElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  it('does not apply bold styling if item name is not provided', () => {
    const itemsWithoutNames = [
      { id: '1', position: 1, name: '', description: 'Description without name' },
    ];
    render(<List items={itemsWithoutNames} />);
    const descriptionElement = screen.getByText('Description without name');
    expect(descriptionElement).toBeInTheDocument();
    expect(screen.queryByText(':')).not.toBeInTheDocument(); // Ensures no bold colon if name is absent
  });
});
