import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Register() {
  const { registerUser } = useContext(AuthContext);

  // Состояние для 5 полей
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    planet: '' // Родная планета
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      alert("Пароль должен быть длиннее 6 символов!");
      return;
    }
    registerUser(formData);
  };

  return (
    <div className="container" style={{ maxWidth: "500px", marginTop: "50px" }}>
      <h1>📝 Регистрация новобранца</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        {/* Поле 1: Имя */}
        <input 
          type="text" name="name" placeholder="Имя Лорда / Леди" required 
          value={formData.name} onChange={handleChange} 
          style={{ padding: "10px" }}
        />

        {/* Поле 2: Email */}
        <input 
          type="email" name="email" placeholder="Email (Астропатическая связь)" required 
          value={formData.email} onChange={handleChange} 
          style={{ padding: "10px" }}
        />

        {/* Поле 3: Пароль */}
        <input 
          type="password" name="password" placeholder="Пароль (Код доступа)" required 
          value={formData.password} onChange={handleChange} 
          style={{ padding: "10px" }}
        />

        {/* Поле 4: Возраст */}
        <input 
          type="number" name="age" placeholder="Возраст (лет служения Хаосу)" required 
          value={formData.age} onChange={handleChange} 
          style={{ padding: "10px" }}
        />

        {/* Поле 5: Планета */}
        <select 
            name="planet" required 
            value={formData.planet} onChange={handleChange}
            style={{ padding: "10px" }}
        >
            <option value="" disabled>Выберите родной мир</option>
            <option value="Terra">Святая Терра</option>
            <option value="Cadia">Кадия (R.I.P.)</option>
            <option value="Prospero">Просперо</option>
            <option value="Warp">Варп</option>
        </select>

        <button type="submit" style={{ padding: "12px", backgroundColor: "#f1c40f", border: "none", fontWeight: "bold", cursor: "pointer" }}>
          Присягнуть на верность
        </button>
      </form>
      
      <p style={{ marginTop: "10px" }}>
        Уже есть аккаунт? <Link to="/login" style={{ color: "#f1c40f" }}>Войти</Link>
      </p>
    </div>
  );
}

export default Register;