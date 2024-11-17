import React from 'react'; 
import ProductItem from './ProductItem'; // import ProductItem

const ProductList = ({ products }) => { // destructure products from props
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id} 
            name={product.name} 
            price={product.price} 
            description={product.description} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList; 