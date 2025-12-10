import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function BasketList() {
  const { cart, removeFromCart } = useContext(ShopContext);

  const total = cart.length * 100;

  if (cart.length === 0) {
    return <div className="container"><h2>Корзина пуста 🕸️</h2></div>;
  }

  return (
    <div className="container">
      <h1>🛒 Ваша корзина</h1>
      {cart.map((item) => (
        <div key={item.cartId} style={{ border: "1px solid #333", padding: "10px", margin: "10px 0", display: "flex", justifyContent: "space-between", backgroundColor: "#1e1e1e" }}>
          <div>
            <h3>{item.name}</h3>
            <p>Цена: 100 золотых</p>
          </div>
          <button 
            onClick={() => removeFromCart(item.cartId)}
            style={{ backgroundColor: "#880808", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
          >
            Удалить
          </button>
        </div>
      ))}
      <h3>Итого: {total} золотых</h3>
      <Link to="/create-order" className="btn-gold" style={{ display: "inline-block", marginTop: "20px", color: "#f1c40f" }}>
        Перейти к оформлению заказа →
      </Link>
    </div>
  );
}

export default BasketList;