import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  
  // Текущий активный пользователь (или null, если гость)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  // База данных пользователей (массив)
  const [usersDB, setUsersDB] = useState(() => {
    const saved = localStorage.getItem("usersDB");
    return saved ? JSON.parse(saved) : [];
  });

  // Сохраняем базу при изменении
  useEffect(() => {
    localStorage.setItem("usersDB", JSON.stringify(usersDB));
  }, [usersDB]);

  // Сохраняем текущего юзера при изменении
  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  // === РЕГИСТРАЦИЯ ===
  const registerUser = (userData) => {
    // Проверка: существует ли такой email
    const exists = usersDB.find(u => u.email === userData.email);
    if (exists) {
      alert("Такой пользователь уже существует!");
      return false;
    }

    const newUser = { ...userData, id: Date.now() };
    setUsersDB([...usersDB, newUser]);
    setUser(newUser); // Сразу логиним после регистрации
    navigate("/"); // Перенаправляем на главную
    return true;
  };

  // === ВХОД ===
  const loginUser = (email, password) => {
    const foundUser = usersDB.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      navigate("/");
      return true;
    } else {
      alert("Неверный email или пароль");
      return false;
    }
  };

  // === ВЫХОД ===
  const logoutUser = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};