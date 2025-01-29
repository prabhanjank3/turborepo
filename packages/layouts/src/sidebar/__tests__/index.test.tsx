import * as React from 'react';
import { render } from '@testing-library/react';

import Sidebar from '..';

describe('<Sidebar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Sidebar views={[]} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
