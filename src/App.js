import { Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pagebar from "./components/Pagebar";
import AllCategories from "./pages/AllCategories";
import AllBrands from "./pages/AllBrands";
import AllOffers from "./pages/AllOffers";
import MenClothingAndFashion from "./pages/MenClothingAndFashion";
import Computer from "./pages/Computer";
import CardHolder from "./components/CardHolder";

const App = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Pagebar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcategories" element={<AllCategories />} />
          <Route path="/allbrands" element={<AllBrands />} />
          <Route path="/alloffers" element={<AllOffers />} />
          <Route
            path="/menclothingfashion"
            element={<MenClothingAndFashion />}
          />
          <Route path="/computer" element={<Computer />} />
        </Routes>

        <CardHolder />
      </div>

      <Footer />
    </>
  );
};

export default App;
