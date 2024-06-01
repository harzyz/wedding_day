import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import PhotoBook from "./pages/photoBook/photoBook";
import OrderOfService from "./pages/orderOfService/orderOfService";
import HymnPage from "./pages/hymnPage/hymnPage";
import GiftPage from "./pages/giftPage/giftPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/photo-book" element={<PhotoBook />} />
        <Route path="/order-of-service" element={<OrderOfService />} />
        <Route path="/hymns/:id" element={<HymnPage />} />
        <Route path="/gifts" element={<GiftPage />} />
      </Routes>
    </Router>
  );
}

export default App;
