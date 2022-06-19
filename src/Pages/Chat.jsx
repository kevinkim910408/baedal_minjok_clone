import React, { useEffect, useRef, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import io from 'socket.io-client'
import flex from '../Components/Common/flex'
import ChatPic from '../Assets/Image/ChatLogo.png'
import Mainheader from '../Components/MainComponents/Mainheader'

const socket = io.connect("http://3.37.87.166/chat");

const Chat = () => {
    const chatRef = useRef();
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const username = localStorage.getItem("username")
    const scrollRef = useRef();

    const scollToMyRef = () => {
      const scroll =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      scrollRef.current.scrollTo(0, scroll);
    };

    useEffect(()=>{
        chatRef.current.focus();
        scollToMyRef();
        if(flag){
            socket.emit("login", {nickname: username})
            setFlag(false)
        }
        socket.on("chat", (data)=>{
            setMessages([...messages, data.msg])
        })
    },[flag, messages, username])

    const sendMessage = (event) => {
        event.preventDefault();
        if(message !== "") socket.emit("chat", {msg: message}, () => setMessage(''));
        setMessages([...messages, chatRef.current.value + "&^&%$^$@!/@$!-"])
        chatRef.current.value = "";
    }

    return (
        <StWrap> 
            <Mainheader />
            <StImg src={ChatPic} alt="" />
            <StTitle>무엇을 도와드릴까요?</StTitle>
            <StDiv>
                <StDivTwo ref={scrollRef}>
                    {messages.map((v,i)=>{
                        if(v.includes("&^&%$^$@!/@$!-")){
                            return <StP>{v.split("&^&%$^$@!/@$!-")}</StP>
                        }else{
                            return <StPTwo>{v.split("&^&%$^$@!/@$!-")}</StPTwo>
                        }
                    })}
                </StDivTwo>
                <StChatDiv> 
                    <StLine />
                    <input 
                        type="text" 
                        onChange={(event)=> setMessage(event.target.value)}
                        onKeyDown={event=>event.key === 'Enter' ? sendMessage(event) : null}
                        ref={chatRef}
                    />
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
    overflow: auto;
    & > .pass {
      color: var(--primary);
    }
    & > .danger {   
      color: var(--red);
    }
`;

const StDiv = styled.div`
    ${flex({direction:'column', })}
    width: calc(100vh - 60vh);
    height: 800px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    margin-bottom: 2rem;
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
    ${flex({direction:'column', justify:'flex-end'})}
    width: 100%;
`;

const StTitle = styled.div`
    font-size: 2rem;
    margin: 1rem;
    font-family: 'BMDOHYEON';
`;

const StP = styled.div`
    ${flex({ justify:'flex-end'})}
    width: 100%;
`;

const StPTwo = styled.div`
    ${flex({ justify:'flex-start'})}
    width: 100%;
`;

const StDivTwo = styled.div`
    width: 100%;
    height: 600px;
    overflow: scroll;
`;