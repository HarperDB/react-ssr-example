import React from 'react';
import { hydrateRoot } from 'react-dom/client'
import App from './app.jsx';

hydrateRoot(
  document.getElementById('root'),
  <App initialPostData={window.__INITIAL_POST_DATA__} />
);
