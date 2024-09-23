import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/jadwal-latihan" element={<Schedule />} />
        <Route path="/dokumentasi" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
