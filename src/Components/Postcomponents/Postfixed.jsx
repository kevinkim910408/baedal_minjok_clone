import React from 'react'
import styled from 'styled-components'
import flex from '../Common/flex';

const Postfixed = () => {
    return (
        <>
            <PostTop>
            </PostTop>
        </>
    );
}

const PostTop = styled.div`
   width: calc(47vh);
    height: 150px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    margin-bottom: 32.7rem;
`;


export default Postfixed

// const PostTop = styled.div`
//     ${flex({})}
//     width: calc(97vh - 50vh);
//     height: 150px;
//     border: 2px solid var(--primary);
//     border-radius: 10px;
//     margin-bottom: 33rem;
//     position: fixed;
// `;