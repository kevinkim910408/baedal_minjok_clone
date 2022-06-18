import React from 'react'
import LoadingOne from '../Assets/Image/loadingOne.PNG'
import styled, { keyframes } from 'styled-components'
import flex from '../Components/Common/flex';

const Loading = () => {
  return (
    <StWrap>
      <StDiv>
        <img src={LoadingOne} alt="" />
      </StDiv>
    </StWrap>
  )
}

export default Loading;

const animation = keyframes`
  50% {
    transform: scale(1.1);
  }
`;

const StWrap = styled.div`
    ${flex({direction:'column'})}
    width: 100%;
    height: 100%;
    background-color: var(--white);
    & > .pass {
      color: var(--primary);
    }
    & > .danger {
      color: var(--red);
    }
`;

const StDiv = styled.div`
  ${flex({direction:'column'})}
  width: calc(100vh - 60vh);
  height: 100vh;
  animation: ${animation} 3s infinite;
`;