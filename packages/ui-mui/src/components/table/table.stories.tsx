import { Meta, StoryObj } from '@storybook/react';
import CustomizedTables from './'; // Adjust path to your component

// Define metadata for the component in Storybook
export default {
  title: 'Components/Tables', // Title in Storybook sidebar
  component: CustomizedTables, // The component being documented
} as Meta<typeof CustomizedTables>;

type Story = StoryObj<typeof CustomizedTables>;

// Default story for the table
export const Default: Story = {
  args: {}, // No additional args needed, since the table is static and predefined
};
