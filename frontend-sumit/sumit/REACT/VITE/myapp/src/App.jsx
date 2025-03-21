import React from 'react';
import "./App.css"
import Layout from './Contextuse/page/Layout';
import ProductProvider from './Contextuse/context/ProductProvider';

function App() {
  return (
    <div>
      <ProductProvider>
       <Layout/>
      </ProductProvider>
      
    </div>
  );
}

export default App;