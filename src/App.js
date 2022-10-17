import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";
// import Main from "./components/Main";
import Sport from "./components/Sport";
import Premium from "./components/Premium";
import Shows from "./components/Shows";
import Movies from "./components/Movies";
import Kids from "./components/Kids";
import Channels from "./components/Channels";
import DetailMovie from "./components/DetailMovie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Sliders />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Sport" element={<Sport />} />
        <Route path="/Shows" element={<Shows />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Channels" element={<Channels />} />
        <Route path="/DetailMovie/:id" element={<DetailMovie />} />
      </Routes>
    </div>
  );
}

export default App;
