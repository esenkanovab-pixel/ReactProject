import { factions } from "../data";
import { Link } from "react-router-dom";
// 👇 1. Импортируем хук и контекст
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function List() {
  // 👇 2. Достаем функцию добавления в корзину
  const { addToCart } = useContext(ShopContext);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>⚔️ Пантеон Хаоса</h1>

      {factions.map(faction => (
        <div
          key={faction.id}
          style={{
            border: `2px solid ${faction.color}`,
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "30px",
            // 👇 3. Изменил фон на темный, чтобы подходило под тему
            backgroundColor: "#1e1e1e", 
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
            overflow: "hidden"
          }}
        >
          <img 
            src={faction.image} 
            alt={faction.name} 
            style={{
              width: "100%", 
              height: "200px", 
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "15px"
            }} 
          />

          <h2 style={{ color: faction.color, marginTop: 0 }}>
            {faction.ruName}
          </h2>
          <p>{faction.description}</p>
          
          <div style={{ marginTop: "15px" }}>
            {/* 👇 4. КНОПКА ДОБАВЛЕНИЯ В КОРЗИНУ */}
            <button 
              onClick={() => addToCart(faction)}
              style={{
                padding: "10px 20px",
                backgroundColor: "transparent", // Прозрачный фон
                border: `2px solid ${faction.color}`, // Цветная рамка
                color: faction.color, // Цветной текст
                fontWeight: "bold",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px", // Отступ справа от кнопки Подробнее
                fontSize: "1rem"
              }}
            >
              В корзину +
            </button>

            <Link 
              to={`/faction/${faction.id}`}
              style={{ 
                  display: "inline-block", 
                  backgroundColor: faction.color,
                  color: "white", 
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  border: `2px solid ${faction.color}`
              }}
            >
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;