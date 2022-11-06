import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Home from "../../Screens/Home";
import Contact from "../../Screens/Contact";
import About from "../../Screens/About";
import ScrollToTop from "./ScrollToTop";
import { database, onValue, ref } from "../Firebase";
import Category from "../../Screens/Category";
import Loading from "../../Components/Loading";

const AppRouter = () => {
  const [imageData, setImageData] = useState([]);
  const [categorynames, setcategorynames] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    const locRef = ref(database, "catogries");

    onValue(locRef, (snapshot) => {
      const data = snapshot.val();
      if (data.Home) {
        setImageData(Object.values(data?.Home));
      }

      setData(data);
      setLoading(false);
    });
  };

  const fetchCatrgories = async () => {
    const locRef = ref(database, "categorynames");

    onValue(locRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setcategorynames(Object.values(data));
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchImages();
    fetchCatrgories();
  }, []);

  if (loading) return <Loading />;

  return (
    <Router>
      <Header categorynames={categorynames} />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home imageData={imageData} />} />
          <Route path="/Category" element={<Category data={data} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </Router>
  );
};

export default AppRouter;
