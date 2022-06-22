import React, { useState } from "react";
import styled from 'styled-components';
import { AiFillMinusCircle } from 'react-icons/ai'
import flex from "../Common/flex";


function MinusBtn() {
    return (
        <>
            <CircleButton >
                <AiFillMinusCircle />
            </CircleButton>
        </>
    );
}

const CircleButton = styled.button`
${flex({ direction: "column" })}
  background: var(--primary);
  width: 30px;
  height: 30px;
  font-size: 100px;
  border-radius: 50%;
  margin: 0px;
  padding: 0px;
  
  align-items: center;
  cursor: pointer;
`;

export default MinusBtn;