import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/faction/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
