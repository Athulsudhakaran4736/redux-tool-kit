import { useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/cart";
import "./ActiveButton.css";
import propTypes from "prop-types";

const ActiveButton = ({ productId, cartCount }) => {
  const dispatch = useDispatch();

  return (
    <div className="main-button">
      <button
        className="active-button"
        onClick={() => dispatch(decrement(productId))}
      >
        -
      </button>
      {cartCount}
      <button
        className="active-button"
        onClick={() => dispatch(increment(productId))}
      >
        +
      </button>
    </div>
  );
};

ActiveButton.propTypes = {
  productId: propTypes.node,
  cartCount: propTypes.node,
};

export default ActiveButton;
