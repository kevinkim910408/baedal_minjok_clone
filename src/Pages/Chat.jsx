// import React, { useEffect, useRef, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import io from 'socket.io-client'
// import flex from '../Components/Common/flex'
// import ChatPic from '../Assets/Image/ChatLogo.png'
// import Mainheader from '../Components/MainComponents/Mainheader'

// const socket = io.connect("http://3.37.87.166/chat");

// const Chat = () => {
//     const chatRef = useRef();
//     const [flag, setFlag] = useState(true);
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const username = localStorage.getItem("username")
//     const [room, setRoom] = useState("");
//     const scrollRef = useRef();

//     const scrollToMyRef = () => {
//         const scroll =
//             scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
//         scrollRef.current.scrollTo(0, scroll);
//     };

//     const joinRoom = () => {
//         setRoom(username+0)
//         socket.emit("join_room", room);
//         console.log("i am in Chat room: " + room +  ", userName: " + username)
//     }

//     useEffect(() => {
//         chatRef.current.focus();
//         scrollToMyRef();
//         joinRoom();
        
//         if (flag) {
//             socket.emit("login", { nickname: username })
//             setFlag(false)
//         }
//         socket.on("chat", (data) => {
//             setMessages([...messages, data.msg])
//         })
//     }, [flag, messages, username])

//     const sendMessage =  async (event) => {
//         event.preventDefault();
//         if (message !== "")  await socket.emit("chat", { msg: message }, () => setMessage(''));
//         setMessages([...messages, chatRef.current.value + "&^&%$^$@!/@$!-a$2%69(*/@@#1"])
//         chatRef.current.value = "";
//     }

//     return (
//         <StWrap>
//             <Mainheader />
//             <StImg src={ChatPic} alt="" />
//             <StTitle>무엇을 도와드릴까요?</StTitle>
//             <StDiv>
//                 <StDivTwo ref={scrollRef}>
//                     {messages.map((v, i) => {
//                         if (v.includes("&^&%$^$@!/@$!-a$2%69(*/@@#1")) {
//                             return <>
//                                 <StUserSideChat style={{ margin: '0' }}>
//                                     <p>{v.split("&^&%$^$@!/@$!-a$2%69(*/@@#1")}</p>
//                                 </StUserSideChat>
//                                 <StUserSideChat>
//                                 </StUserSideChat>
//                             </>
//                         } else {
//                             return <>
//                                 <StServerSideChat style={{ margin: '0' }}>
//                                     <p>{v}</p>
//                                 </StServerSideChat>
//                                 <StServerSideChat>
//                                 </StServerSideChat>
//                             </>
//                         }
//                     })}
//                 </StDivTwo>
//                 <StChatDiv>
//                     <StLine />
//                     <input
//                         type="text"
//                         onChange={(event) => setMessage(event.target.value)}
//                         onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
//                         ref={chatRef}
//                     />
//                 </StChatDiv>
//             </StDiv>
//         </StWrap>
//     );
// }

// export default Chat;

// const animation = keyframes`
//   50% {
//     transform: translateX(5px);
//   }
// `;

// const StWrap = styled.div`
//     ${flex({ direction: 'column' })}
//     height: 100vh;
//     background-color: var(--white);
//     overflow: auto;
//     & > .pass {
//       color: var(--primary);
//     }
//     & > .danger {   
//       color: var(--red);
//     }
// `;

// const StDiv = styled.div`
//     ${flex({ direction: 'column', })}
//     width: calc(100vh - 60vh);
//     height: 800px;
//     border: 2px solid var(--primary);
//     border-radius: 10px;
//     margin-bottom: 2rem;
// `;

// const StImg = styled.img`
//     width: calc(100vh - 80vh);
//     animation: ${animation} 1s infinite;
// `;

// const StLine = styled.div`
//     width: 80%;
//     height: 2px;
//     margin-bottom: 1rem;
//     border: 0.1px solid var(--font-secondary);
//     opacity: 0.3;
// `;

// const StChatDiv = styled.form`
//     ${flex({ direction: 'column', justify: 'flex-end' })}
//     width: 100%;
// `;

// const StTitle = styled.div`
//     font-size: 2rem;
//     margin: 1rem;
//     font-family: 'BMDOHYEON';
// `;

// const StPModel = styled.div`
//     width: 100%;
//     margin: 0 0 1rem 0;
//     & > p{
//         padding: 10px;
//         border-radius: 15px;
//         color: white;
//         font-size: 1.5rem;
//     }
//     & > span{
//         font-size: 0.5rem;
//         color: var(--font-secondary);
//     }
// `;

// const StUserSideChat = styled(StPModel)`
//     ${flex({ justify: 'flex-end' })}
//     & > p{
//         background-color: var(--primary);
//     }
// `;

// const StServerSideChat = styled(StPModel)`
//     ${flex({ justify: 'flex-start' })}
//     & > p{
//         background-color: var(--primary-hover);
//     }
// `;

// const StDivTwo = styled.div`
//     width: 100%;
//     height: 600px;
//     overflow: scroll;
// `;