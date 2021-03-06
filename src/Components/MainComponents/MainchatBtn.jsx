import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillChatFill } from 'react-icons/bs';
import { IoIosAddCircle } from 'react-icons/io'
// 다른 모양 import { RiQuestionAnswerFill } from 'react-icons/ri';
import io from 'socket.io-client'
import Chat from '../Chat/Chat';

const socket = io.connect("http://3.37.87.166/chat")

const MainchatBtn = () => {
    const navigate = useNavigate();
    const getType = localStorage.getItem("usertype");
    const [type, setType] = useState(getType);

    // chat
    const username = localStorage.getItem("username")
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        setRoom(1)
    }, [username])

    const joinRoom = (e) => {
        setShowChat(value => !value);
        socket.emit("join_room", room);
    }

    return (
        <>
            {(() => {
                if (type === "1" && getType !== null)
                    return (
                        <>
                            <AddButton>
                                <IoIosAddCircle size={60} color={'var(--primary-hover)'} onClick={() => {
                                    navigate('/post');
                                }}>
                                </IoIosAddCircle>
                            </AddButton>
                            <ChatButton>
                                <BsFillChatFill size={60} color={'var(--primary-hover)'} onClick={(e) => joinRoom(e)}>
                                </BsFillChatFill>
                            </ChatButton>
                        </>
                    )
                else if (type !== "1" && getType !== null) {
                    return (
                        <>
                            <ChatButton>
                                <BsFillChatFill size={60} color={'var(--primary-hover)'} onClick={(e) => joinRoom(e)}>
                                </BsFillChatFill>
                            </ChatButton>
                        </>
                    );
                }
                else {
                    return (
                        <>
                        </>
                    );
                }
            })()}
            <StDiv>
                {!showChat ? (
                    <></>
                )
                    : (
                        <Chat socket={socket} username={username} room={room} />
                    )}

            </StDiv>
        </>
    );
}

export default MainchatBtn;

const ChatButton = styled.div`
    background-color: #cec7c7;
    border-radius: 40%;
    padding: 10px;
    position: fixed;
    right: 5%;
    bottom: 5%;
    cursor: pointer;
`;

const AddButton = styled.div`
    background-color: #cec7c7;
    border-radius: 40%;
    padding: 10px;
    position: fixed;
    right: 5%;
    bottom: 15%;
    cursor: pointer;
`;

const StDiv = styled.div`
    position: fixed;
    right: 5%;
    bottom: 25%;
    cursor: pointer;
`;