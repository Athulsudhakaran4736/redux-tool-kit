import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart";
import "./BeforeButton.css";
import propTypes from "prop-types"

const BeforeButton = ({product}) => {
    const dispatch = useDispatch();
  return (
    <div>
      <button className="add-button" onClick={() => dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  );
};

BeforeButton.propTypes = {
    product: propTypes.node
}

export default BeforeButton;
