import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import FavList from "./components/fav_list/FavList";
import "./App.css";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favlist" element={<FavList />}></Route>
      </Routes>
    </>
  );
}

export default App;
