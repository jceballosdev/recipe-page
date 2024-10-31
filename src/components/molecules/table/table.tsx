'use client';
import { TableItem } from '@/types';
import React from 'react';
import styles from './table.module.css';

/**
 * Props for the Table component.
 * @property {TableItem[]} items - The rows to display in the table, each with a label and value.
 * @property {string[]} [headers] - The optional headers to display at the top of the table.
 */
export interface TableProps {
  items: TableItem[];
  headers?: string[];
}

/**
 * Table component to render a simple table with rows of labeled data.
 *
 * Each item is displayed as a row, with the label in the first column and the value in the second column.
 *
 * @param {TableProps} props - Props to configure the Table component.
 * @returns {JSX.Element} A styled table displaying the list of items.
 */
const Table: React.FC<TableProps> = ({
  items,
  headers,
}: TableProps): JSX.Element => {
  if (items.length === 0) {
    console.warn('Table component received an empty items array');
    return <></>
  }

  return (
    <table className={styles.table} aria-label="Data table">
      {headers && headers.length === 2 && (
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.label}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
