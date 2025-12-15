import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

import BasketList from "./pages/BasketList";
import CreateOrder from "./pages/CreateOrder";
import OrdersList from "./pages/OrdersList";
import UpdateOrder from "./pages/UpdateOrder";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="main-content">
        <Routes>
          
          <Route path="/" element={<List />} />
          <Route path="/faction/:id" element={<Detail />} />

          
          <Route path="/cart" element={<BasketList />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/update-order/:id" element={<UpdateOrder />} />

         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;