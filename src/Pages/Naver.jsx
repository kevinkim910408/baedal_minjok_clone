import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __naverSignIn } from '../Redux/modules/user';
import Loading from './Status/Loading';

const Naver = () => {
    // 인가코드 받는 부분
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      dispatch(__naverSignIn(code))
      navigate('/')
    },[dispatch, code, navigate])
  return (
    <>
      <Loading />
    </>
  )
}

export default Naver

