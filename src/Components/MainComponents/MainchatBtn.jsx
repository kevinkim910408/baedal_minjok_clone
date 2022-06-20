import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillChatFill } from 'react-icons/bs';
import { IoIosAddCircle } from 'react-icons/io'
// 다른 모양 import { RiQuestionAnswerFill } from 'react-icons/ri';


const MainchatBtn = () => {
    const navigate = useNavigate();
    const getType = localStorage.getItem("usertype");
    const [type, setType] = useState(getType);
    return (
        <>
            {(() => {
                if (type === "1")
                    return (
                        <>
                            <AddButton>
                                <IoIosAddCircle size={60} color={'#b71540'} onClick={() => {
                                    navigate('/post');
                                }}>
                                </IoIosAddCircle>
                            </AddButton>
                            <ChatButton>
                                <BsFillChatFill size={60} color={'#b71540'} onClick={() => {
                                    navigate('/chat');
                                }}>
                                </BsFillChatFill>
                            </ChatButton>
                        </>
                    )
                else {
                    return (
                        <>
                            <ChatButton>
                                <BsFillChatFill size={60} color={'#b71540'} onClick={() => {
                                    navigate('/chat');
                                }}>
                                </BsFillChatFill>
                            </ChatButton>
                        </>
                    );
                }
            })()}

        </>
    );
}

export default MainchatBtn;

const ChatButton = styled.div`
    position: fixed;
    right: 5%;
    bottom: 5%;
    cursor: pointer;
`;

const AddButton = styled.div`
    position: fixed;
    right: 5%;
    bottom: 12%;
    cursor: pointer;
`;