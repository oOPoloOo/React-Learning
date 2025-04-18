import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router';
import { FooterContextProvider } from './contexts/FoooterContext.tsx';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <BrowserRouter>   
    <FooterContextProvider>
     <App />              
    </FooterContextProvider> 
  </BrowserRouter>
);