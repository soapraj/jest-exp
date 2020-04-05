import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render', () => {
    const rendered = render(<App />);
    console.log(rendered.debug());
    expect(rendered.getByText('Sample', { exact: false }));
  });
});
