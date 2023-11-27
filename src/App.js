import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/HomePage";
import Navbar from "./components/navbar/global_navbar";
import Favorit from "./page/Favorit/FavoritPage";
import FavoritGallery from "./page/Favorit/FavoritGallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/favorit" element={<Favorit />} />
          <Route path="/gallery" element={<FavoritGallery />} />
          {/* <Route path="/board" element={<Board />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
