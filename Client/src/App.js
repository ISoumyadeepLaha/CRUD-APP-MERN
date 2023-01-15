import "./App.css";

// components
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import Navbar from "./components/Navbar";

// react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/all" element={<AllUser/>} />
        <Route path="/add" element={<AddUser/>} />
      </Routes>
    </BrowserRouter>
    // <AddUser/>
  );
}

export default App;
