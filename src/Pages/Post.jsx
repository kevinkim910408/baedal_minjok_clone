import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import Mainheader from '../Components/MainComponents/Mainheader'
import { __addPost } from '../Redux/modules/posting'
import { useDispatch } from "react-redux";
import { storage } from '../Shared/firebase'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'

const Post = () => {
  const nameRef = useRef();
  const locationRef = useRef();
  const phoneRef = useRef();
  const logoImgRef = useRef();
  const openingHoursRef = useRef();
  const minPriceRef = useRef();

  const menuNameRef = useRef();
  const priceRef = useRef();
  const explainRef = useRef();
  const menuImgRef = useRef();

  const twomenuNameRef = useRef();
  const twopriceRef = useRef();
  const twoexplainRef = useRef();
  const twomenuImgRef = useRef();

  const threemenuNameRef = useRef();
  const threepriceRef = useRef();
  const threeexplainRef = useRef();
  const threemenuImgRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fileImage, setFileImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eq4vhqgsMYr_9QiNLuKk2DJksM_7Qo1FQw&usqp=CAU");
  const [menuOne, setMenuOne] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eq4vhqgsMYr_9QiNLuKk2DJksM_7Qo1FQw&usqp=CAU");
  const [menuTwo, setMenuTwo] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eq4vhqgsMYr_9QiNLuKk2DJksM_7Qo1FQw&usqp=CAU");
  const [menuThree, setMenuThree] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eq4vhqgsMYr_9QiNLuKk2DJksM_7Qo1FQw&usqp=CAU");

   // 파일 저장
   const saveFileImage = (e, imgRef, set) => {
    set(URL.createObjectURL(e.target.files[0]));
    uploadFB(e, imgRef)
   };
   
  const uploadFB = async (e, imgRef) => {
      const upload_file = await uploadBytes(ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0])
      const file_url = await getDownloadURL(upload_file.ref);
      imgRef.current = {url:file_url};
  };

  const onPostHandler = () => {
   try{
    dispatch(__addPost({
      name: nameRef.current.value,
      location: locationRef.current.value,
      phone: phoneRef.current.value,
      logoImg: logoImgRef.current.url,
      openingHours: openingHoursRef.current.value,
      minPrice: minPriceRef.current.value,

      menuName: menuNameRef.current.value,
      price: priceRef.current.value,
      explain: explainRef.current.value,
      menuImg: menuImgRef.current.url,

      menuNameTwo: twomenuNameRef.current.value,
      priceTwo: twopriceRef.current.value,
      explainTwo: twoexplainRef.current.value,
      menuImgTwo: twomenuImgRef.current.url,

      menuNameThree: threemenuNameRef.current.value,
      priceThree: threepriceRef.current.value,
      explainThree: threeexplainRef.current.value,
      menuImgThree: threemenuImgRef.current.url,
    }))
    alert('등록이 완료되었습니다')
    navigate('/')
   }catch(e){
    alert("사진을 선택해 주셔야합니다.");
   }
  }

  return (
    <>
      <Mainheader />
      <StWrap>
        <StDiv>
          <StList>
          <img style={{width:'90%', height:'150px'}} src={fileImage} alt="" />
          <input type="file" placeholder='PICTURE' onChange={(e)=>saveFileImage(e,logoImgRef, setFileImage)} required/>
          </StList>
          <StList>
            <input type="text" placeholder='가게 이름' maxLength={11} ref={nameRef}/>
            <input type="text" placeholder='장소 예) 영등포점' maxLength={10} ref={locationRef}/>
            <input type="number" placeholder='전화번호 예) 07012345678' maxLength={11} ref={phoneRef}/>
            <input type="text" placeholder='오프시간 예) 오전11시' maxLength={6} ref={openingHoursRef}/>
            <input type="text" placeholder='최소 주문 금액 예) 20000' maxLength={7} ref={minPriceRef}/>
          </StList>
          <StList>
          <img style={{width:'90%', height:'150px'}} src={menuOne} alt="" />
          </StList>
          <StList>
          <input type="file" placeholder='PICTURE' onChange={(e)=>saveFileImage(e,menuImgRef, setMenuOne)} required/>
            <input type="text" placeholder='메뉴 이름(최대10자)' maxLength={15} ref={menuNameRef}/>
            <input type="number" placeholder='가격 예) 30000' maxLength={6} ref={priceRef}/>
            <input type="text" placeholder='설명 (최대20자)' maxLength={20} ref={explainRef}/>
          </StList>
          <StList>
          <img style={{width:'90%', height:'150px'}} src={menuTwo} alt="" />
          </StList>
          <StList>
          <input type="file" placeholder='PICTURE' onChange={(e)=>saveFileImage(e,twomenuImgRef, setMenuTwo)} required/>
            <input type="text" placeholder='메뉴 이름(최대10자)' maxLength={15} ref={twomenuNameRef}/>
            <input type="text" placeholder='가격 예) 30000' maxLength={10} ref={twopriceRef}/>
            <input type="text" placeholder='설명 (최대20자)' maxLength={20} ref={twoexplainRef}/>
          </StList>
          <StList>
          <img style={{width:'90%', height:'150px'}} src={menuThree} alt="" />
          </StList>
          <StList>
          <input type="file" placeholder='PICTURE' onChange={(e)=>saveFileImage(e,threemenuImgRef, setMenuThree)} required/>
            <input type="text" placeholder='메뉴 이름(최대10자)' maxLength={15} ref={threemenuNameRef}/>
            <input type="number" placeholder='가격 예) 30000' maxLength={10} ref={threepriceRef}/>
            <input type="text" placeholder='설명 (최대20자)' maxLength={20} ref={threeexplainRef}/>
          </StList>
        </StDiv>
        <StButton 
          onClick={onPostHandler}
        >
          추가하기
        </StButton>
      </StWrap>
    </>
  )
}
export default Post

const StWrap = styled.div`
    ${flex({direction:'column',align:'center'})}
    width: 100%;
    height: 100%;
    background-color: var(--white);
`;

const StDiv = styled.div`
    ${flex({direction:'column',justify:'flex-start'})}
    width: calc(100vh - 60vh);
    height: 650px;
    overflow-y: scroll;
    & > ul{
        margin-bottom: 1rem;
    }
`;

const StList = styled.div`
    ${flex({direction:'column'})}
    width: calc(100vh - 60vh);
    min-height: 200px;
    border-bottom: 1px solid var(--font-secondary);
    font-size: 1.5rem;
    & > input{
      border: none;
      border-bottom: 1px solid var(--font-secondary);
      margin-bottom: 1rem;
    }
`;

const StButton = styled.button`
    width: 200px;
    margin-top: 1rem;
    padding: 10px;
    border-radius: 30px;
    font-size: 2rem;
`;