import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './components/ProductContext';
import { AdminProvider } from './components/AdminContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './components/AuthContext';
import { UserProvider } from './components/UserContext';
import { ShoppingCartProvider } from './components/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingCartProvider>
        <UserProvider>
          <AuthProvider>
            <ProductProvider>
              <AdminProvider>
                <App />
              </AdminProvider>
            </ProductProvider>
          </AuthProvider>
        </UserProvider>
      </ShoppingCartProvider>
      
      
    </BrowserRouter>
  </React.StrictMode>
);