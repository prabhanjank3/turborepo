import Footer from './index'; // Adjust the import path as necessary
import { StoryObj, Meta } from '@storybook/react';

// Define component metadata
export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

// Create your default story
export const Default: Story = {};
