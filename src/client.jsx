import React from 'react';
import { hydrateRoot } from 'react-dom/client'
import App from './app.jsx';

const post = window.__INITIAL_DATA__;

hydrateRoot(
  document.getElementById('root'),
  <App post={post} />
)