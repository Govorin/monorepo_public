import { store } from '@store';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app/app';
const element = document.getElementById('root');
if (!element) throw new Error('Could not find root element');
else {
  const root = ReactDOM.createRoot(document.getElementById('root') as Element);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
}
