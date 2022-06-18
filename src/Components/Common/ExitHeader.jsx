import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import flex from './flex';

const ExitHeader = ({text}) => {
    const navigate = useNavigate();
    const onBackHandler = () => {
        navigate(`/${text}`)
    }
  return (
    <StFlex>
        <StWrap>
            <StBackBtn onClick={onBackHandler}>
                <FontAwesomeIcon className='icon' icon={faXmark} />
            </StBackBtn>
        </StWrap>
    </StFlex>
  )
}

export default ExitHeader;

const StFlex = styled.div`
    ${flex({})}
    width: 100%;
    height: 50px;
    border-bottom: 2px solid var(--primary);
`;

const StWrap = styled.div`
    ${flex({justify:'flex-start'})}
    width: 100%;
    height: 100%;
`;

const StBackBtn = styled.div`
    font-size: 2rem;
    margin-left: 2rem;
`;