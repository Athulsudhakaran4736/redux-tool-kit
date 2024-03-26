import "./ProductList.css";
import products from "../../api/products.json";
import CartButtons from "..";

const ProductList = () => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="product-main-container">
          <img src={product.image} />
          <h1>{product.title}</h1>
          <CartButtons product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
