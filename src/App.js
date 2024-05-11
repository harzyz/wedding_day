import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import PhotoBook from "./pages/photoBook/photoBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/photo-book" element={<PhotoBook />} />
      </Routes>
    </Router>
  );
}

export default App;
