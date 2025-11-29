import { useParams, Link } from "react-router-dom";
import { factions } from "../data";

function Detail() {
  const { id } = useParams();
  const faction = factions.find(item => item.id === Number(id));

  if (!faction) {
    return <h2>Фракция не найдена</h2>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      
      {/* 👇 БОЛЬШАЯ КАРТИНКА */}
      <img 
        src={faction.image} 
        alt={faction.name} 
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "15px",
          boxShadow: `0 0 20px ${faction.color}` // Светящаяся тень цветом бога!
        }}
      />

      <h1 style={{ color: faction.color, fontSize: "3rem", textAlign: "center" }}>
        {faction.ruName}
      </h1>
      
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginTop: "20px" }}>
        {faction.fullDescription}
      </p>

      <br />
      <Link 
        to="/"
        style={{
            display: "block",
            textAlign: "center",
            marginTop: "20px",
            color: faction.color,
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.2rem"
        }}
      >
        ← Вернуться к списку
      </Link>
    </div>
  );
}

export default Detail;