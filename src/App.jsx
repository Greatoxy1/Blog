import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Blog } from "./pages/Blog";
import { Sports } from "./pages/Sports";
import { Shop } from "./pages/Shop";
import { Entertainment } from "./pages/Entertainment";
import Footer from "./pages/Footer";
import ProductLink from "./components/ProductLink";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ProductLink/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </Router>
  );
}
