import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Header from "./components/Header"; // 👈 Импортируем
import Footer from "./components/Footer"; // 👈 Импортируем

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/faction/:id" element={<Detail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;