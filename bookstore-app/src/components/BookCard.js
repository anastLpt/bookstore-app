import React from 'react';
import { useCart } from '../context/CartContext';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="book-card">
      <div className="book-image-placeholder">Обкладинка</div>
      <div className="book-details">
        <span className="category-tag">{book.category}</span>
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <div className="book-footer">
          <span className="price">{book.price} ₴</span>
          <button onClick={() => addToCart(book)} className="btn-primary">Купити</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;