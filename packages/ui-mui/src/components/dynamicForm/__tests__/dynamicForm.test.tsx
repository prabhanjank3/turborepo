import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DynamicForm from '..'; // Adjust the import path accordingly
import '@testing-library/jest-dom';
import { FormConfig } from '../types/formConfig';

// Mock fetch options for the autocomplete field
const mockFetchOptions = jest.fn().mockResolvedValue([
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
]);

// Define the formConfig for testing
const formConfig: FormConfig = {
  fields: [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      validation: { required: true },
      gridProps: { xs: 12, sm: 6 },
    },
    {
      type: 'color',
      name: 'color',
      label: 'Select Color',
      validation: { required: true },
      gridProps: { xs: 12, sm: 6 },
    },
    {
      type: 'select',
      name: 'gender',
      label: 'Gender',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      gridProps: { xs: 12, sm: 6 },
    },
    {
      type: 'autocomplete',
      name: 'skills',
      label: 'Skills',
      fetchOptions: mockFetchOptions,
      gridProps: { xs: 6 },
    },
    {
      type: 'toggle',
      name: 'isActive',
      label: 'Active',
      defaultValue: false,
      gridProps: { xs: 12 },
    },
    {
      type: 'date',
      name: 'dob',
      label: 'Date of Birth',
      gridProps: { xs: 12, sm: 6 },
    },
    {
      type: 'time',
      name: 'alarmTime',
      label: 'Alarm Time',
      gridProps: { xs: 12, sm: 6 },
    },
  ],
};

describe('DynamicForm Tests', () => {
  test('renders the form with text input', () => {
    render(<DynamicForm config={formConfig} />);

    const firstNameInput = screen.getByLabelText(/First Name/i);
    expect(firstNameInput).toBeInTheDocument();
  });

  test('renders the color input', () => {
    render(<DynamicForm config={formConfig} />);

    const colorInput = screen.getByLabelText(/Select Color/i);
    expect(colorInput).toBeInTheDocument();
  });

  test.skip('renders the select input for gender', () => {
    render(<DynamicForm config={formConfig} />);

    const genderSelect = screen.getByLabelText(/Gender/i);
    expect(genderSelect).toBeInTheDocument();
  });

  test.skip('renders the autocomplete input for skills and fetches options', async () => {
    render(<DynamicForm config={formConfig} />);

    const autocompleteInput = screen.getByLabelText(/Skills/i);
    fireEvent.click(autocompleteInput);

    // Wait for the mock fetchOptions to be called
    await waitFor(() => expect(mockFetchOptions).toHaveBeenCalled());

    // Check if options have been rendered
    await waitFor(() => {
      // Use findByText to locate the options dynamically loaded by Autocomplete
      const option1 = screen.getByText('Option 1');
      const option2 = screen.getByText('Option 2');

      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
    });
  });

  test('renders the toggle input for isActive', () => {
    render(<DynamicForm config={formConfig} />);

    const toggleInput = screen.getByLabelText(/Active/i);
    expect(toggleInput).toBeInTheDocument();
  });

  test('renders the date input for Date of Birth', () => {
    render(<DynamicForm config={formConfig} />);

    const dateInput = screen.getByLabelText(/Date of Birth/i);
    expect(dateInput).toBeInTheDocument();
  });

  test('renders the time input for Alarm Time', () => {
    render(<DynamicForm config={formConfig} />);

    const timeInput = screen.getByLabelText(/Alarm Time/i);
    expect(timeInput).toBeInTheDocument();
  });

  test.skip('handles form value changes', () => {
    render(<DynamicForm config={formConfig} />);

    // First Name Input
    const firstNameInput = screen.getByLabelText(/First Name/i);
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput).toHaveValue('John');

    // Gender Select
    const genderSelect = screen.getByLabelText(/Gender/i);
    fireEvent.change(genderSelect, { target: { value: 'male' } });
    expect(genderSelect).toHaveValue('male');

    // Active Toggle
    const activeToggle = screen.getByLabelText(/Active/i);
    fireEvent.click(activeToggle);
    expect(activeToggle).toBeChecked();
  });
});
