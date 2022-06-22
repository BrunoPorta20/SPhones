import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Phones } from "./pages/Phones";
import { Phone } from "./pages/Phone";

import "./global.scss";
import { Header } from "./components/Header"
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="phones/:slug" element={<Phones />} />
          <Route path="phone/:slug" element={<Phone />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
