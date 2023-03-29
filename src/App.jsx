import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Liked from "./pages/liked";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage.jsx";

import { useState, useEffect } from "react";
import { useParams } from "react-router";

function App() {
  const { id } = useParams();
  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(true);
  }, [id]);
  const Error = (props) => {
    useEffect(() => props.handleShow(false), []);
    return <ErrorPage />;
  };

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      {show && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Error handleShow={(res) => setShow(false)} />} />
      </Routes>
      {show && <Footer />}
    </>
  );
}

export default App;
