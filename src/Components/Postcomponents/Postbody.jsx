import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import AddBtn from './PostAddBtn'
import MinusBtn from './PostMinusBtn'

const Postbody = () => {
    const menunameRef = useRef();
    const priceRef = useRef();
    const explainRef = useRef();

    return (
        <>
            <PostMenu >
                메뉴 <PostInput ref={menunameRef} /><br />
                가격 <PostInput type="number" ref={priceRef} /><br />
                상품설명 <PostInputLong ref={explainRef} />
            </PostMenu>

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

const PostInput = styled.input`
  width: 75px;
  height: 40px;
  margin: 0.4rem 0 0 0.4rem;
  font-size: 1.5rem;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
`;

const PostInputLong = styled.input`
  width: 200px;
  height: 40px;
  margin: 0.4rem 0 0 0.4rem;
  font-size: 1.5rem;
  outline: none;
  border-radius: 10px;
`;




export default Postbody