import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollIndicator from './ScrollIndicator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
  </React.StrictMode>
);

