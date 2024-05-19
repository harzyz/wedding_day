import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import PhotoBook from "./pages/photoBook/photoBook";
import OrderOfService from "./pages/orderOfService/orderOfService";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/photo-book" element={<PhotoBook />} />
        <Route path="/order-of-service" element={<OrderOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
