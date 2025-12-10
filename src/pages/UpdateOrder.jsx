import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function UpdateOrder() {
  const { id } = useParams();
  const { orders, updateOrder } = useContext(ShopContext);
  const navigate = useNavigate();
  
  const [form, setForm] = useState({ name: '', address: '' });

  // Загружаем данные существующего заказа
  useEffect(() => {
    const order = orders.find(o => o.id === Number(id));
    if (order) {
      setForm(order.customer);
    }
  }, [id, orders]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOrder(id, form);
    navigate('/orders');
  };

  return (
    <div className="container">
      <h1>🛠 Редактировать заказ #{id}</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <input 
          value={form.name} 
          onChange={e => setForm({...form, name: e.target.value})} 
          style={{ padding: "10px" }}
        />
        <input 
          value={form.address} 
          onChange={e => setForm({...form, address: e.target.value})} 
          style={{ padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#1e90ff", color: "white", border: "none", cursor: "pointer" }}>
          Сохранить изменения
        </button>
      </form>
    </div>
  );
}

export default UpdateOrder;