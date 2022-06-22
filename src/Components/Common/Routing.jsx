import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../../Pages/Home'
import Signin from "../../Pages/Signin";
import Signup from "../../Pages/Signup";
import Kakao from "../../Pages/Kakao";
import Naver from "../../Pages/Naver";
import Mypage from '../../Pages/Mypage';
import Post from '../../Pages/Post';
import UpdateUserInfo from '../../Pages/UpdateUserInfo';
import Detail from "../../Pages/Detail";
import ProtectedRoutes from "./ProtectedRoutes";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user/kakao/callback" element={<Kakao />} />
      <Route path="/user/naver/callback" element={<Naver />} />
      <Route element={<ProtectedRoutes />} >
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/UpdateUserInfo" element={<UpdateUserInfo />}/>
        <Route path="/Detail/:id" element={<Detail />}/>
      </Route>
      <Route />
      <Route />
    </Routes>
  );
};

export default Routing;
