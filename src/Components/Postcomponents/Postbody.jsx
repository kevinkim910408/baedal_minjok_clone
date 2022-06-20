import React from 'react'
import styled from 'styled-components'

const Postbody = () => {
    return (
        <>
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
            <PostMenu />
        </>
    );
}

const PostMenu = styled.div`
    width: 95%;
    min-height: 150px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    margin: 1rem 0 1rem 0;

`;


export default Postbody