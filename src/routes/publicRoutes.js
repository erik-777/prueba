import { Route, Routes } from "react-router-dom";
import Main from "../components/layouts/main";
import Home from "../view/home";
import About from "../view/about";
import Contact from "../view/contact";
import Register from "../view/register";

export default function PublicRoutes() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Main>
  );
}
