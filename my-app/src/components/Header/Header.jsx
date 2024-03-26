import { CiShoppingCart } from "react-icons/ci";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartList } = useSelector((state) => state.cart);
  const cartListCount = cartList?.reduce(
    (acc, value) => (acc += value.count),
    0,
  );
  return (
    <header>
      <div className="container">
        <div>
          <h2 className="logo-text">Logo</h2>
        </div>
        <ul>
          <li>Contact</li>
          <li>About Me</li>
          <li className="cart-count-main">
            <div className="header-cart-count">{cartListCount}</div>
            <CiShoppingCart size={40} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
