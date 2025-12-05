import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          ⚜️ Warhammer Universe
        </Link>
        <nav>
          <Link to="/">Фракции</Link>
          {/* В будущем сюда можно добавить "Об игре" или "Карта" */}
        </nav>
      </div>
    </header>
  );
}

export default Header;