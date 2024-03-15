import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
import HomePage from './components/Layout';
import InvoiceService from './components/Invoice';
import SetInvoice from './components/SetInvoice';
import InvoiceDetail from './components/InvoiceDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<InvoiceService />} />
          <Route path='/details/:id' element={<InvoiceDetail />} />
          <Route path='/update/:id' element={<SetInvoice />} />
          <Route path='/add' element={<SetInvoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);