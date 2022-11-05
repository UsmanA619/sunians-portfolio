import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Contact from "../../Screens/Contact";
import Home from "../../Screens/Home";
import ScrollToTop from "./ScrollToTop";

const AppRouter = () => {
  return (
    <Router>
      <Header />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </Router>
  );
};

export default AppRouter;
