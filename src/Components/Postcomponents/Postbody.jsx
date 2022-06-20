import React from 'react'
import styled from 'styled-components'
import flex from '../Common/flex';

const Postbody = () => {
    return (
        <>
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />



        </>
    );
}

const PostMenu = styled.div`
   width: calc(47vh);
    height: 150px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    margin-bottom: 1rem;

`;


export default Postbody