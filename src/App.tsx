import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Documentation from "./pages/Documentation";

const BaseRouter = "/MUHAMMAD-NAVIGO-RASHYA-XI-PPLG2"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={`${BaseRouter}`} element={<Home />} />
        <Route path={`${BaseRouter}/jadwal-latihan`} element={<Schedule />} />
        <Route path={`${BaseRouter}/dokumentasi`} element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
