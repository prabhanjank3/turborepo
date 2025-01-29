import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import DefaultLayout from './index'; // Adjust the path as needed
import { Navbar, Footer } from '@achieve4sure/ui-mui';
import { AcUnitOutlined, AvTimer } from '@mui/icons-material';
import { MemoryRouter } from 'react-router-dom'; // Required for routing context

// Base args for the DefaultLayout
const baseArgs = {
  Navbar: (
    <Navbar
      appInfo={{
        logo: <AcUnitOutlined fontSize="large" />,
        name: 'SAMPLE',
        subLine: 'Digital Platform',
      }}
      menuItems={[]}
      UserControls={<AvTimer />}
    />
  ),
  Footer: <Footer />,
  children: (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Main Section</h1>
      <p>This is where your app's content will be displayed!</p>
    </div>
  ),
};

// Metadata for the DefaultLayout story
export default {
  title: 'Layouts/DefaultLayout',
  component: DefaultLayout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: baseArgs,
} as Meta<typeof DefaultLayout>;

type Story = StoryObj<typeof DefaultLayout>;

// Default story (Base layout)
export const Default: Story = {};

// Custom content in the main section
export const CustomContent: Story = {
  args: {
    ...baseArgs,
    children: (
      <div style={{ padding: '2rem', textAlign: 'left' }}>
        <h1>Custom Content Example</h1>
        <p>
          This is an example of custom content passed to the DefaultLayout
          component.
        </p>
      </div>
    ),
  },
};

// Navbar with custom configuration
export const CustomNavbar: Story = {
  args: {
    ...baseArgs,
    Navbar: (
      <Navbar
        appInfo={{
          logo: <AcUnitOutlined fontSize="large" />,
          name: 'Custom App',
          subLine: 'Built with Love',
        }}
        menuItems={[
          { label: 'Home', url: '/' },
          {
            label: 'About',
            url: '/about',
            child: [{ label: 'Company', url: '/' }],
          },
        ]}
        UserControls={<AvTimer />}
      />
    ),
  },
};

// Footer with custom content
export const CustomFooter: Story = {
  args: {
    ...baseArgs,
  },
};
