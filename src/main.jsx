import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
register();
import App from './App';
import MarqueeComponent from './scripts/MarqueeComponent';
import '../styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
         <MarqueeComponent />
      </BrowserRouter>
   </React.StrictMode>
);