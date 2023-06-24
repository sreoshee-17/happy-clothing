import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './Contexts/Productcontext';
import SidebarProvider from './Contexts/Sidebarcontext';
import  CartProvider  from 'file:///E:/Projects/shopping-website/src/Contexts/CartContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
);

