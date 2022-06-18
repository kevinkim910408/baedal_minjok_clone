import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __naverSignIn } from '../Redux/modules/user';
import { getCookie } from '../Shared/Cookie';
import Loading from './Loading';

const Naver = () => {
    // 인가코드 받는 부분
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = getCookie("Authorization")


    useEffect(()=>{
      dispatch(__naverSignIn(code))
      if(token){
        navigate('/');
      }
    },[dispatch, code, navigate, token])
  return (
    <>
      <Loading />
    </>
  )
}

export default Naver

