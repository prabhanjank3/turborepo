import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import ReusableTable from '..';
import '@testing-library/jest-dom';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Button } from '@mui/material';

// Sample data and columns for testing
const sampleData = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
];

const sampleColumns = [
  { field: 'name', headerName: 'Name', sortable: true },
  { field: 'age', headerName: 'Age', sortable: true },
];

const sampleActions = [
  { icon: <EditIcon />, onClick: jest.fn() },
  { icon: <DeleteIcon />, onClick: jest.fn() },
];

describe('ReusableTable', () => {
  // Test 1: Renders the table with columns and data
  it('renders the table with columns and data', () => {
    render(<ReusableTable columns={sampleColumns} data={sampleData} />);

    // Check if column headers are rendered
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();

    // Check if data is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  // Test 2: Displays loading state
  it('displays loading state', () => {
    render(<ReusableTable columns={sampleColumns} data={[]} loading={true} />);

    // Check if loading spinner is displayed
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  // Test 3: Displays error state
  it('displays error state', () => {
    const errorMessage = 'Failed to fetch data';
    render(
      <ReusableTable columns={sampleColumns} data={[]} error={errorMessage} />
    );

    // Check if error message is displayed
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  // Test 4: Displays empty state
  it('displays empty state', () => {
    render(<ReusableTable columns={sampleColumns} data={[]} />);

    // Check if empty state message is displayed
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  // Test 5: Handles row selection
  it('handles row selection', () => {
    const handleRowSelectionChange = jest.fn();
    render(
      <ReusableTable
        columns={sampleColumns}
        data={sampleData}
        onRowSelectionChange={handleRowSelectionChange}
      />
    );

    // Select the first row
    const checkbox = screen.getAllByRole('checkbox')[1]; // Skip the "select all" checkbox
    fireEvent.click(checkbox);

    // Verify that the row selection callback is called
    expect(handleRowSelectionChange).toHaveBeenCalledWith([sampleData[0]]);
  });

  // Test 6: Handles search functionality
  it('handles search functionality', () => {
    render(<ReusableTable columns={sampleColumns} data={sampleData} />);

    // Click the search icon to open the search field
    const searchIcon = screen.getAllByTestId('SearchIcon');
    fireEvent.click(searchIcon[0]);

    // Type into the search field
    const searchField = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchField, { target: { value: 'John' } });

    // Verify that the table is filtered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
  });

  // Test 7: Handles pagination
  it('handles pagination', () => {
    const handlePageChange = jest.fn();
    render(
      <ReusableTable
        columns={sampleColumns}
        data={sampleData}
        pagination={{ page: 0, pageSize: 1, totalRows: sampleData.length }}
        onPageChange={handlePageChange}
      />
    );

    // Click the next page button
    const nextPageButton = screen.getByRole('button', { name: /next page/i });
    fireEvent.click(nextPageButton);

    // Verify that the page change callback is called
    expect(handlePageChange).toHaveBeenCalledWith(1, 1);
  });

  // Test 8: Handles sorting
  it('handles sorting', () => {
    const handleSort = jest.fn();
    render(
      <ReusableTable
        columns={sampleColumns}
        data={sampleData}
        onSort={handleSort}
      />
    );

    // Click the sort button for the "Name" column
    const sortButton = screen.getByText('Name');
    fireEvent.click(sortButton);

    // Verify that the sort callback is called
    expect(handleSort).toHaveBeenCalledWith('name', 'asc');
  });

  // Test 9: Handles actions column
  it('handles actions column', () => {
    render(
      <ReusableTable
        columns={sampleColumns}
        data={sampleData}
        actions={sampleActions}
      />
    );

    // Click the edit action button
    const editButton = screen.getAllByTestId('DeleteIcon')[0];
    fireEvent.click(editButton);

    // Verify that the edit action callback is called
    expect(sampleActions[1].onClick).toHaveBeenCalledWith(sampleData[0]);
  });

  // Test 10: Handles custom toolbar
  it('handles custom toolbar', () => {
    const customToolbar = <Button>Add New</Button>;
    render(
      <ReusableTable
        columns={sampleColumns}
        data={sampleData}
        customToolbar={customToolbar}
      />
    );

    // Verify that the custom toolbar is rendered
    expect(screen.getByText('Add New')).toBeInTheDocument();
  });

  // Test 12: Handles search icon transition
  it('handles search icon transition', () => {
    render(<ReusableTable columns={sampleColumns} data={sampleData} />);

    // Click the search icon
    const searchIcon = screen.getAllByTestId('SearchIcon')[0];
    fireEvent.click(searchIcon);

    // Verify that the search field is displayed
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});
