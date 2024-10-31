import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Table, { TableProps } from './table';
import styles from './table.module.css';

describe('Table Component', () => {
  const defaultProps: TableProps = {
    items: [
      { id: '1', position: 1, label: 'Calories', value: '200kcal' },
      { id: '2', position: 2, label: 'Protein', value: '15g' },
    ],
  };

  it('renders a table with items', () => {
    render(<Table {...defaultProps} />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveClass(styles.table);

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(defaultProps.items.length);
  });

  it('renders headers if provided', () => {
    const headers = ['Nutrient', 'Amount'];
    render(<Table {...defaultProps} headers={headers} />);

    const headerCells = screen.getAllByRole('columnheader');
    expect(headerCells).toHaveLength(headers.length);

    headers.forEach((header, index) => {
      expect(headerCells[index]).toHaveTextContent(header);
    });
  });

  it('does not render headers if not provided', () => {
    render(<Table {...defaultProps} />);
    const headerCells = screen.queryAllByRole('columnheader');
    expect(headerCells).toHaveLength(0);
  });

  it('renders a row for each item', () => {
    render(<Table {...defaultProps} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(defaultProps.items.length);

    defaultProps.items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.value)).toBeInTheDocument();
    });
  });

  it('shows a warning if items array is empty', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Table items={[]} />);
    expect(consoleSpy).toHaveBeenCalledWith('Table component received an empty items array');
    consoleSpy.mockRestore();
  });
});
