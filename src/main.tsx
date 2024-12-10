import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Enable React Concurrent Mode
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);