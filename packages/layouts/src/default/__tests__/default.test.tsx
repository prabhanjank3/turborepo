import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DefaultLayout, { DefaultLayoutProps } from '..';
import { MemoryRouter } from 'react-router-dom';

// Mock Navbar and Footer components
const MockNavbar = () => <div data-testid="navbar">Mock Navbar</div>;
const MockFooter = () => <div data-testid="footer">Mock Footer</div>;

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('DefaultLayout Component', () => {
  const defaultProps: DefaultLayoutProps = {
    Navbar: <MockNavbar />,
    Footer: <MockFooter />,
    children: <div data-testid="main-content">Main Content</div>,
  };

  it('renders the Navbar component', () => {
    renderWithRouter(<DefaultLayout {...defaultProps} />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    renderWithRouter(<DefaultLayout {...defaultProps} />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders the main content', () => {
    renderWithRouter(<DefaultLayout {...defaultProps} />);
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('renders correctly with all components', () => {
    const { container } = renderWithRouter(<DefaultLayout {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
