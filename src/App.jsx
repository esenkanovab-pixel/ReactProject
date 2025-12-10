import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

// 👇 1. Новые импорты (добавь их сюда)
import BasketList from "./pages/BasketList";
import CreateOrder from "./pages/CreateOrder";
import OrdersList from "./pages/OrdersList";
import UpdateOrder from "./pages/UpdateOrder";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="main-content">
        <Routes>
          {/* Старые маршруты */}
          <Route path="/" element={<List />} />
          <Route path="/faction/:id" element={<Detail />} />

          {/* 👇 2. Новые маршруты (добавь их сюда) */}
          <Route path="/cart" element={<BasketList />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/update-order/:id" element={<UpdateOrder />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;