import * as React from 'react';
import { render } from '@testing-library/react';

import Sidebar from '..';

describe('<Sidebar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Sidebar
        sidebarItems={[]}
        appInfo={{
          logo: undefined,
          name: '',
          subLine: '',
        }}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
