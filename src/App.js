import "./App.scss";
import {
  Navbar,
  Home,
  Fitness,
  Footer,
  Product,
  Error,
} from "./Components";
import Admin from "./Components/Admin/CreateProduct";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./Redux/loginDetails/action";

// import Error from "./Components/Error/Error";
// import Cart from "./Components/Cart/Cart";

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
