import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import Postbody from '../Components/Postcomponents/Postbody'
import Mainheader from '../Components/MainComponents/Mainheader'
import { __addPost } from '../Redux/modules/posting'
import { useDispatch } from "react-redux";
import AddBtn from '../Components/Postcomponents/PostAddBtn'
import MinusBtn from '../Components/Postcomponents/PostMinusBtn'


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

  const [selectImage, setSelectImage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeSelectImage = (e) => {
    setSelectImage(e.target.files);
  }

  const onPostHandler = () => {
    dispatch(__addPost({
      name: nameRef.current.value,
      location: locationRef.current.value,
      phone: phoneRef.current.value,
      logoImg: logoImgRef.current.value,
      openingHours: openingHoursRef.current.value,
      minPrice: minPriceRef.current.value,
      menuName: menuNameRef.current.value,
      price: priceRef.current.value,
      explain: explainRef.current.value,
      menuImg: menuImgRef.current.value,
    }))
    alert('등록이 완료되었습니다')
    navigate('/')
  }

  return (
    <>
      <Mainheader />
      <PostWrap>
        <PostInsideDiv>
          <PostDiv>
            <PostMenu>
              가게이름 <PostInput type='text' ref={nameRef} /><br />
              전화번호 <PostInput type="number" ref={phoneRef} />
              최소주문금액 <PostInput type="number" ref={minPriceRef} /><br />
              위치 <PostInput ref={locationRef} />
              영업시간 <PostInput type="number" ref={openingHoursRef} />
              가게로고 <PostInput type="file" ref={logoImgRef} />
            </PostMenu>
            <PostMenu >
              메뉴 <PostInput ref={menuNameRef} />
              메뉴사진<PostInput type="file" ref={menuImgRef} /> <br />
              가격 <PostInput type="number" ref={priceRef} /><br />
              상품설명 <PostInputLong type='text' ref={explainRef} />
            </PostMenu>
            <Postbody />
            <AddBtn />
            <MinusBtn />
          </PostDiv>
          <PostBtn onClick={onPostHandler}>등록하기</PostBtn>
        </PostInsideDiv>
      </PostWrap>
    </>
  )
}

const PostWrap = styled.div`
    ${flex({ direction: 'column' })}
    height: calc(100vh - 75px);
    background-color: var(--white);
`;

const PostDiv = styled.div`
    ${flex({ direction: 'column', justify: 'flex-start' })}
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary);
    border-radius: 10px;
    overflow: scroll;
`;

const PostInsideDiv = styled.div`
  ${flex({ direction: 'column' })}
  width: calc(100vh - 50vh);
  height: 750px;
`
const PostMenu = styled.div`
    width: 95%;
    min-height: 150px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    margin: 1rem 0 1rem 0;

`;

const PostInput = styled.input`
  width: 75px;
  height: 40px;
  margin: 0.4rem 0 0 0.4rem;
  font-size: 1.5rem;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
`;

const PostInputLong = styled.input`
  width: 200px;
  height: 40px;
  margin: 0.4rem 0 0 0.4rem;
  font-size: 1.5rem;
  outline: none;
  border-radius: 10px;
`;

const PostBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  margin: 10px;
`


export default Post