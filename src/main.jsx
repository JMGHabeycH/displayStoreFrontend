// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from './context/ApiContext.jsx';

//Import de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ApiProvider>
    <BrowserRouter>
      <App />   
    </BrowserRouter>
  </ApiProvider>
    
  // </StrictMode>
)
