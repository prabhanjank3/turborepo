import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('UiMui Component', () => {
  it('renders without crashing', () => {
    render(
      <Button
        label={''}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
  });
});
