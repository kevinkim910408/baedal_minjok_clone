import React from 'react';
import styled, {keyframes} from 'styled-components';
import flex from '../Components/Common/flex'
import ChatPic from '../Assets/Image/ChatLogo.png'
import Mainheader from '../Components/MainComponents/Mainheader'

const Chat = () => {
    return (
        <StWrap>
            <Mainheader />
            <StImg src={ChatPic} alt="" />
            <StDiv>
                <StInput />
                <StButton>전송</StButton>
            </StDiv>
        </StWrap>
    );
}

export default Chat;

const animation = keyframes`
  50% {
    transform: translateX(5px);
  }
`;

const StWrap = styled.div`
    ${flex({direction:'column'})}
    height: 100vh;
    background-color: var(--white);
    & > .pass {
      color: var(--primary);
    }
    & > .danger {   
      color: var(--red);
    }
`;

const StDiv = styled.div`
    ${flex({align:'flex-end'})}
    width: calc(100vh - 60vh);
    height: 800px;
    border: 2px solid var(--primary);
    border-radius: 10px;
`;

const StInput = styled.input`
    width: 70%;
    height: 30px;
    border: none;
    border-bottom: 2px solid var(--primary);
    margin-bottom: 1rem;
`;

const StButton = styled.button`
    width: 15%;
    padding: 0.4rem;
    border-radius: 10px;
    margin-bottom: 1rem;
`;

const StImg = styled.img`
    width: calc(100vh - 80vh);
    animation: ${animation} 1s infinite;
`;
