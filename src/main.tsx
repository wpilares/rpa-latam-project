import React from 'react';
import './styles/_global.scss';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { JournalLayout } from './layouts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalLayout>
        <App />
      </JournalLayout>
    </BrowserRouter>
  </React.StrictMode>,
);
