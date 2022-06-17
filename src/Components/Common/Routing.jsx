import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../../Pages/Home'
import Signin from "../../Pages/Signin";
import Signup from "../../Pages/Signup";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
};

export default Routing;
