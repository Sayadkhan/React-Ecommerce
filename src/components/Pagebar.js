import React from "react";
import { Link } from "react-router-dom";

const Pagebar = () => {
  return (
    <div className="container flex justify-center gap-9 p-5 mx-auto shadow-md">
      <Link to="/">Home</Link>
      <Link to="/allcategories">All categories</Link>
      <Link to="/allbrands">All brands</Link>
      <Link to="/alloffers">All offers</Link>
      <Link to="/menclothingfashion">Men Clothing & Fashion</Link>
      <Link to="/computer">Computer & Accessories</Link>
    </div>
  );
};

export default Pagebar;
