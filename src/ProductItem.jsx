function ProductItem({ name, price, description }) { 
    return (
      <li>
        <h3>{name}</h3>  {/* Render the product's name */}
        <p>{price}</p>   {/* Render the product's price */}
        <p>{description}</p>  {/* Render the product's description */}
      </li>
    );
  }
  
  export default ProductItem;
  