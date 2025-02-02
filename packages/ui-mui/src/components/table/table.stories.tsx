import React from 'react';
import ReusableTable from './index'; // Adjust the import path as necessary
import { StoryObj, Meta } from '@storybook/react';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Button } from '@mui/material';

// Define component metadata
export default {
  title: 'Components/ReusableTable',
  component: ReusableTable,
} as Meta<typeof ReusableTable>;

type Story = StoryObj<typeof ReusableTable>;

// Sample data and columns for the table
const sampleData = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Alice Johnson', age: 28 },
];

const sampleColumns = [
  { field: 'name', headerName: 'Name', sortable: true },
  { field: 'age', headerName: 'Age', sortable: true },
];

const sampleActions = [
  { icon: <EditIcon />, onClick: (row: any) => console.log('Edit', row) },
  { icon: <DeleteIcon />, onClick: (row: any) => console.log('Delete', row) },
];

// Default story
export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

// Story with actions
export const WithActions: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    actions: sampleActions,
  },
};

// Story with custom toolbar
export const WithCustomToolbar: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    customToolbar: <Button variant="contained">Add New</Button>,
  },
};

// Story with pagination
export const WithPagination: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    pagination: { page: 0, pageSize: 2, totalRows: sampleData.length },
    onPageChange: (page, pageSize) =>
      console.log('Page Change', page, pageSize),
  },
};

// Story with row selection
export const WithRowSelection: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    onRowSelectionChange: (selectedRows) =>
      console.log('Selected Rows', selectedRows),
  },
};

// Story with CSV export
export const WithCsvExport: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    exportOptions: { enableCsvExport: true },
  },
};

// Story with loading state
export const WithLoadingState: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    loading: true,
  },
};

// Story with error state
export const WithErrorState: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    error: 'Failed to fetch data. Please try again later.',
  },
};

// Story with empty state
export const WithEmptyState: Story = {
  args: {
    columns: sampleColumns,
    data: [],
  },
};
