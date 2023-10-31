import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/HomePage";
import Navbar from "./components/navbar/global_navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/board" element={<Board />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
