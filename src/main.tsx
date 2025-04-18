import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router';
import { FooterContextProvider } from './contexts/FoooterContext.tsx';
import { UsersProvider } from './contexts/UsersContext.tsx';
import { GamesProvider } from './contexts/GamesContex.tsx';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <BrowserRouter>   
    <FooterContextProvider>
      <GamesProvider>
        <UsersProvider>
          <App />    
        </UsersProvider>  
      </GamesProvider>        
    </FooterContextProvider> 
  </BrowserRouter>
);