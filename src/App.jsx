import React, { useState } from 'react'; // import useState
import ProductList from './ProductList'; // import ProductList
import AddProductForm from './AddProductForm'; // import AddProductForm
import './App.css';

const App = () => {
  const defaultProducts = [
    { id: 1, name: 'Vanilla Bean Candle', price: 10.99, description: 'Warm vanilla scent.' },
    { id: 2, name: 'Lavender Candle', price: 12.50, description: 'Relaxing lavender aroma.' },
    { id: 3, name: 'Pumpkin Spice Candle', price: 15.25, description: 'Cozy pumpkin spice fragrance.' },
  ];
  
  const [products, setProducts] = useState(defaultProducts); // initialize products state with defaultProducts

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]); // add newProduct to products
  };

  return ( // return ProductList and AddProductForm components
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm onAddProduct={addProduct} />
    </div>
  );
};

export default App; // export App component
