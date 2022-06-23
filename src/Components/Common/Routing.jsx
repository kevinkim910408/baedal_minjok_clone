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
import ProtectedRoutesNoLogin from "./ProtectedRoutesNoLogin";
import ProtectedRoutesYesLogin from "./ProtectedRoutesYesLogin";
import Search from "../../Pages/Search";
import Error from "../../Pages/Status/Error";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoutesYesLogin />} >
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/kakao/callback" element={<Kakao />} />
        <Route path="/user/naver/callback" element={<Naver />} />
      </Route>

      <Route element={<ProtectedRoutesNoLogin />} >
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/UpdateUserInfo" element={<UpdateUserInfo />}/>
        <Route path="/Detail/:id" element={<Detail />}/>
        <Route path="/Search" element={<Search />} />
      </Route>
      <Route path="*" element={<Error />} />
      <Route />
    </Routes>
  );
};

export default Routing;
