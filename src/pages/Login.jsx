import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Login() {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className="container" style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h1>🔑 Вход в систему</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input 
          type="email" placeholder="Email" required 
          value={email} onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: "10px" }}
        />
        <input 
          type="password" placeholder="Пароль" required 
          value={password} onChange={(e) => setPassword(e.target.value)} 
          style={{ padding: "10px" }}
        />
        <button type="submit" style={{ padding: "12px", backgroundColor: "#1e90ff", color: "white", border: "none", fontWeight: "bold", cursor: "pointer" }}>
          Войти
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        Нет аккаунта? <Link to="/register" style={{ color: "#1e90ff" }}>Зарегистрироваться</Link>
      </p>
    </div>
  );
}

export default Login;