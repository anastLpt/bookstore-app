import React, { useState } from 'react';
import BookCard from '../components/BookCard';

const mockBooks =[
  { id: 1, title: 'JavaScript. Повне керівництво', author: 'Девід Фленаган', price: 850, category: 'Програмування' },
  { id: 2, title: 'Вивчаємо React', author: 'Алекс Бенкс', price: 600, category: 'Програмування' },
  { id: 3, title: '1984', author: 'Джордж Орвелл', price: 350, category: 'Художня література' },
  { id: 4, title: 'Дюна', author: 'Джордж Орвелл', price: 300, category: 'Художня література' },
  { id: 5, title: 'Чистий код', author: 'Роберт Мартін', price: 750, category: 'Програмування' },
];

const Home = () => {
  const [filter, setFilter] = useState('Всі');

  const filteredBooks = filter === 'Всі' 
    ? mockBooks 
    : mockBooks.filter(b => b.category === filter);

  return (
    <div className="home-page">
      <h2>Каталог літератури</h2>
      <div className="filters">
        <button onClick={() => setFilter('Всі')} className={filter === 'Всі' ? 'active' : ''}>Всі</button>
        <button onClick={() => setFilter('Програмування')} className={filter === 'Програмування' ? 'active' : ''}>Програмування</button>
        <button onClick={() => setFilter('Художня література')} className={filter === 'Художня література' ? 'active' : ''}>Художня література</button>
      </div>
      <div className="books-grid">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;