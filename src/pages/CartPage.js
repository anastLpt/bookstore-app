import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert(`Замовлення на суму ${totalPrice} грн успішно оформлено!`);
    clearCart();
  };

  return (
    <div className="cart-page">
      <h2>Ваш кошик</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Тут поки порожньо. Перейдіть до каталогу, щоб знайти цікаві книги.</p>
          <Link to="/" className="btn-primary">В каталог</Link>
        </div>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>{item.author}</p>
                </div>
                <div className="item-action">
                  <span className="price">{item.price} грн</span>
                  <button onClick={() => removeFromCart(item.id)} className="btn-danger">Видалити</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-sidebar">
            <h3>Підсумок</h3>
            <p>Кількість товарів: {cart.length}</p>
            <h2 className="total-price">До сплати: {totalPrice} грн</h2>
            <button onClick={handleCheckout} className="btn-success">Оформити замовлення</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;