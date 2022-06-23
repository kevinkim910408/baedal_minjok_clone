import React from 'react'
import styled, { keyframes } from 'styled-components'
import flex from '../../Components/Common/flex';
import ErrorPic from '../../Assets/Image/Error.PNG'
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const onClickEventHandler = () => {
    navigate(-1)
  }
  return (
    <StWrap>
      <StDiv>
        <img src={ErrorPic} alt="" />
      </StDiv>
      <p>페이지에 오류가 있습니다.</p>
      <p>사용에 불편을 끼쳐드려 </p>
      <p>죄송합니다. </p>
      <StButton onClick={onClickEventHandler}>뒤로가기</StButton>
    </StWrap>
  )
}

export default Error;

const animation = keyframes`
  50% {
    transform: scale(1.1);
  }
`;

const StWrap = styled.div`
    ${flex({direction:'column'})}
    width: 100%;
    height: 100vh;
    background-color: var(--white);
    & > p {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
`;

const StDiv = styled.div`
  ${flex({direction:'column'})}
  width: calc(100vh - 60vh);
  animation: ${animation} 3s infinite;
  margin-bottom: 2rem;
`;

const StButton = styled.button`
  margin-top: 2rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
`;