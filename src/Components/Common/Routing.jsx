import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../../Pages/Home'
import Signin from "../../Pages/Signin";
import Signup from "../../Pages/Signup";
import Kakao from "../../Pages/Kakao";
import Naver from "../../Pages/Naver";
import Chat from '../../Pages/Chat';
import Mypage from '../../Pages/Mypage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user/kakao/callback" element={<Kakao />} />
      <Route path="/user/naver/callback" element={<Naver />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
};

export default Routing;
