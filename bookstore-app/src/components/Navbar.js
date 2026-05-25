import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">📚 IT-BookStore</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Каталог</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            Кошик <span className="badge">{cart.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;