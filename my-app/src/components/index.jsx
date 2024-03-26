import { useSelector } from "react-redux";
import ActiveButton from "./CartButtons/ActiveButton/ActiveButton";
import BeforeButton from "./CartButtons/BeforeButton/BeforeButton";
import propTypes from "prop-types";

const CartButtons = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);
  const cartCount = cartList?.find((item) => item?.id == product?.id)?.count;

  return (
    <>
      {cartCount > 0 ? (
        <ActiveButton productId={product.id} cartCount={cartCount} />
      ) : (
        <BeforeButton product={product} />
      )}
    </>
  );
};

CartButtons.propTypes = {
  product: propTypes.node,
};

export default CartButtons;
