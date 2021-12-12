import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectCart } from "../../store/cartStoreSlice";

type ICartData = {
  [id: string]: number;
};
const Header: React.FC = () => {
  const cart: ICartData = useSelector(SelectCart);
  const arr = Object.values(cart);

  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li className="li-cart">
                <NavLink to="/cart">Корзина</NavLink>
                {arr.length === 0 ? null : (
                  <div className="li-number">
                    {Object.values(cart).reduce((acc, a) => acc + a, 0)}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
