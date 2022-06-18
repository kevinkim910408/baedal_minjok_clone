import React, { useEffect, useRef, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import io from 'socket.io-client'
import flex from '../Components/Common/flex'
import ChatPic from '../Assets/Image/ChatLogo.png'
import Mainheader from '../Components/MainComponents/Mainheader'

const socket = io.connect("http://3.37.87.166");

const Chat = () => {
    const [sendMSG, setSendMSG] = useState("");
    const [receiveMSG, setReceiveMSG] = useState("");
    const chatRef = useRef();

    const onSendMSGHandler = (e) => {
        e.preventDefault();
        socket.emit("chat", {msg: sendMSG});
        chatRef.current.value = "";
    }

    useEffect(()=>{
        setSendMSG();
        chatRef.current.focus();
        socket.on("chat", (data)=>{
            setReceiveMSG(data);
        })
    },[socket])

    console.log(sendMSG, receiveMSG)

    return (
        <StWrap> 
            <Mainheader />
            <StImg src={ChatPic} alt="" />
            <StTitle>무엇을 도와드릴까요?</StTitle>
            <StDiv>
                {receiveMSG}
                <StLine />
                {sendMSG}
                <StChatDiv> 
                    <StInput ref={chatRef} onChange={(e)=>setSendMSG(e.target.value)}/>
                    <StButton onClick={(e)=>onSendMSGHandler(e)}>전송</StButton>
                </StChatDiv>
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
    font-family: 'BMDOHYEON';
    & > .pass {
      color: var(--primary);
    }
    & > .danger {   
      color: var(--red);
    }
`;

const StDiv = styled.div`
    ${flex({direction:'column', justify:'flex-end'})}
    width: calc(100vh - 60vh);
    height: 800px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    margin-bottom: 2rem;
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

const StLine = styled.div`
    width: 80%;
    height: 2px;
    margin-bottom: 1rem;
    border: 0.1px solid var(--font-secondary);
    opacity: 0.3;
`;

const StChatDiv = styled.form`
    ${flex({})}
    width: 100%;
`;

const StTitle = styled.div`
    font-size: 2rem;
    margin: 1rem;
`;