import { render } from '@testing-library/react';

import TaskForm from './TaskForm';

describe('TaskForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskForm />);
    expect(baseElement).toBeTruthy();
  });
});
