import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

function CreateOrder() {
  const { createOrder, cart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', address: '' });

  if (cart.length === 0) return <div className="container">Корзина пуста</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(form);
    navigate('/orders'); // Перенаправляем в список заказов
  };

  return (
    <div className="container">
      <h1>✍️ Оформление заказа</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <input 
          type="text" 
          placeholder="Имя Лорда" 
          required 
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          style={{ padding: "10px" }}
        />
        <input 
          type="text" 
          placeholder="Адрес (Планета, Улей)" 
          required 
          value={form.address}
          onChange={e => setForm({...form, address: e.target.value})}
          style={{ padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#f1c40f", border: "none", cursor: "pointer", fontWeight: "bold" }}>
          Подтвердить заказ
        </button>
      </form>
    </div>
  );
}

export default CreateOrder;