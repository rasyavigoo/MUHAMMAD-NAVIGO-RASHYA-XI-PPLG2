import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Documentation from "./pages/Documentation";
import { BaseURL } from "./Constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={`${BaseURL}`} element={<Home />} />
        <Route path={`${BaseURL}/jadwal-latihan`} element={<Schedule />} />
        <Route path={`${BaseURL}/dokumentasi`} element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
