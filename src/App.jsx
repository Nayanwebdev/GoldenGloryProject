import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/Navbar";
import { Routes, Route,Navigate } from "react-router-dom";
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
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/collection" element={<Collection />} />
        <Route exact path="/liked" element={<Liked />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/:tab" element={<Profile />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
