import Navbar from "./components/Navbar";
import MoviesGrid from "./components/MoviesGrid";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-stretch">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />}/>
          <Route path="/movies" element={<MoviesGrid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
