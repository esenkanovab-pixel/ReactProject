import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Корзина (массив товаров)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Заказы (массив созданных заказов)
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  // Сохраняем в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // === МЕТОДЫ КОРЗИНЫ ===
  const addToCart = (item) => {
    setCart((prev) => [...prev, { ...item, cartId: Date.now() }]); // cartId уникален для каждого добавления
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => setCart([]);

  // === МЕТОДЫ ЗАКАЗОВ ===
  const createOrder = (customerData) => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cart,
      customer: customerData,
      total: cart.length * 100 // Допустим, каждый юнит стоит 100 монет
    };
    setOrders((prev) => [...prev, newOrder]);
    clearCart();
    return newOrder.id;
  };

  const deleteOrder = (orderId) => {
    setOrders((prev) => prev.filter(o => o.id !== Number(orderId)));
  };

  const updateOrder = (orderId, updatedData) => {
    setOrders(prev => prev.map(order => 
      order.id === Number(orderId) ? { ...order, customer: updatedData } : order
    ));
  };

  return (
    <ShopContext.Provider value={{ 
      cart, orders, addToCart, removeFromCart, createOrder, deleteOrder, updateOrder 
    }}>
      {children}
    </ShopContext.Provider>
  );
};