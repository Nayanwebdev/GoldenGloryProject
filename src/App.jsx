import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Liked from "./pages/Liked";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Collection" element={<Collection/>} />
        <Route path="/liked" element={ <Liked/> } />
        <Route path="/Cart" element={ <Cart/> } />
        <Route path="/Profile" element={ <Profile/> } />
      </Routes>
    </>
  );
}

export default App;
