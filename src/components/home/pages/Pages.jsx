import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
function Pages() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default Pages;
