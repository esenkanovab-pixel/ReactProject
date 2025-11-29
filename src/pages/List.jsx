import { factions } from "../data";
import { Link } from "react-router-dom";

function List() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>⚔️ Пантеон Хаоса</h1>

      {factions.map(faction => (
        <div
          key={faction.id}
          style={{
            border: `2px solid ${faction.color}`,
            borderRadius: "12px", // Скруглим углы
            padding: "20px",
            marginBottom: "30px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Добавим тень
            overflow: "hidden"
          }}
        >
          {/* 👇 КАРТИНКА ЗДЕСЬ */}
          <img 
            src={faction.image} 
            alt={faction.name} 
            style={{
              width: "100%", 
              height: "200px", 
              objectFit: "cover", // Чтобы картинка красиво обрезалась, а не сплющилась
              borderRadius: "8px",
              marginBottom: "15px"
            }} 
          />

          <h2 style={{ color: faction.color, marginTop: 0 }}>
            {faction.ruName}
          </h2>
          <p>{faction.description}</p>
          
          <Link 
            to={`/faction/${faction.id}`}
            style={{ 
                display: "inline-block", 
                marginTop: "10px", 
                backgroundColor: faction.color, // Кнопка цвета бога
                color: "white", 
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold"
            }}
          >
            Подробнее
          </Link>
        </div>
      ))}
    </div>
  );
}

export default List;