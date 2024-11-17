import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => { // add onAddProduct prop
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (event) => { // add handleSubmit function
    event.preventDefault();

    const newProduct = { // create newProduct object
      name: productName,
      price: parseFloat(productPrice), 
      description: productDescription,
    };
    onAddProduct(newProduct);

    setProductName('');
    setProductPrice('');
    setProductDescription('');
  };

  return ( // return form with input fields for product name, price, and description
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)} 
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm; // export AddProductForm component
