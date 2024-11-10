import { Route, Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Services from "./components/pages/Services";
import Blog from "./components/Blog";
import Case from "./components/pages/Case";

function App() {
  return (
    <main className="w-screen overflow-hidden ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Case" element={<Case />} />
      </Routes>
      <Footer />
    </main>
  );
}
export default App;
