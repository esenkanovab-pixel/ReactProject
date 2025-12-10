import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function OrdersList() {
  const { orders, deleteOrder } = useContext(ShopContext);

  if (orders.length === 0) return <div className="container"><h2>Заказов пока нет</h2></div>;

  return (
    <div className="container">
      <h1>📜 История заказов</h1>
      {orders.map(order => (
        <div key={order.id} style={{ border: "1px solid #444", padding: "15px", marginBottom: "15px", backgroundColor: "#1a1a1a" }}>
          <h3>Заказ #{order.id}</h3>
          <p>Дата: {order.date}</p>
          <p>Получатель: {order.customer.name}</p>
          <p>Сумма: {order.total} золотых</p>
          
          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <Link to={`/update-order/${order.id}`} style={{ color: "#1e90ff" }}>✏️ Редактировать</Link>
            <button onClick={() => deleteOrder(order.id)} style={{ color: "#e74c3c", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
              ❌ Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrdersList;