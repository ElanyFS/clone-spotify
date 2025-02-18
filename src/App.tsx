import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Songs from "./pages/Songs";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import Song from "./pages/Song";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/artist/:id" element={<Artist />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/songs" element={<Songs />}></Route>
        <Route path="/song/:id" element={<Song />}></Route>
      </Routes>
    </>
  );
}

export default App;
