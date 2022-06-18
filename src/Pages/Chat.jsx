import React from 'react';
import styled from 'styled-components';
import flex from '../Components/Common/flex'

const Chat = () => {
    return (
        <StWrap>
            <StDiv>
                dd
            </StDiv>
        </StWrap>
    );
}

export default Chat;

export const StWrap = styled.div`
    ${flex({direction:'column',align:'center'})}
    background-color: var(--white);
    & > .pass {
      color: var(--primary);
    }
    & > .danger {
      color: var(--red);
    }
`;


export const StDiv = styled.div`
    ${flex({direction:'column',align:'center'})}
    width: calc(100vh - 60vh);
    height: 100vh;
    border: 1px solid  black;
    margin-bottom: 1rem;
`;
