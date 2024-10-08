import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from './context/CoinContext.jsx';


// Render the application with ClerkProvider and other providers
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <CoinContextProvider>
          <App />
        </CoinContextProvider>
      </BrowserRouter>
  </StrictMode>
);
