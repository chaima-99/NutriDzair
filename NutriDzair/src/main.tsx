import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';  // Import ChakraProvider
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider> {/* Wrap your App component with ChakraProvider */}
      <App />
    </ChakraProvider>
  </StrictMode>,
);
