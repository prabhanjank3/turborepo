import DynamicForm from './index'; // Adjust the import path as necessary
import { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Components/DynamicForm',
  component: DynamicForm,
} as Meta<typeof DynamicForm>;

type Story = StoryObj<typeof DynamicForm>;

const formConfig = {
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
      fetchOptions: async () => {
        // Simulate API call
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.json();
        return data.map((todo: any) => ({
          label: todo.title,
          value: todo.id,
        }));
      },
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
export const Default: Story = {
  args: {
    config: formConfig,
  },
};
