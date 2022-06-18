import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillChatFill } from 'react-icons/bs';
// 다른 모양 import { RiQuestionAnswerFill } from 'react-icons/ri';


const MainchatBtn = () => {
    const navigate = useNavigate();
    return (
        <>
            <ChatButton>
                <BsFillChatFill size={60} color={'#20a097'} onClick={() => {
                    navigate('/chat');
                }}>
                </BsFillChatFill>
            </ChatButton>
        </>
    );
}

const ChatButton = styled.div`
    position: fixed;
    right: 5%;
    bottom: 5%;
    cursor: pointer;
`;

export default MainchatBtn