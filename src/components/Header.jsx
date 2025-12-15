import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Импорт AuthContext

function Header() {
  const { user, logoutUser } = useContext(AuthContext); // Достаем user и функцию выхода

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          ⚜️ Warhammer Universe
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link to="/">Фракции</Link>
          
          {/* Показываем корзину и заказы только если user есть */}
          {user && (
             <>
                <Link to="/cart">🛒 Корзина</Link>
                <Link to="/orders">📜 Заказы</Link>
             </>
          )}

          {/* Блок авторизации */}
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "20px" }}>
              <span style={{ color: "#f1c40f" }}>👤 {user.name}</span>
              <button 
                onClick={logoutUser} 
                style={{ background: "transparent", border: "1px solid #555", color: "#ccc", padding: "5px 10px", cursor: "pointer", borderRadius: "4px" }}
              >
                Выйти
              </button>
            </div>
          ) : (
            <div style={{ marginLeft: "20px" }}>
              <Link to="/login" style={{ marginRight: "15px" }}>Вход</Link>
              <Link to="/register" style={{ backgroundColor: "#f1c40f", color: "#000", padding: "5px 10px", borderRadius: "5px", textDecoration: "none" }}>
                Регистрация
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;