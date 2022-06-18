import styled, { css } from 'styled-components'
import flex from '../Common/flex';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


// 카테고리 이미지
import category1 from '../../image/category1.jpg'
import category2 from '../../image/category2.jpg'
import category3 from '../../image/category3.jpg'
import category4 from '../../image/category4.jpg'
import category5 from '../../image/category5.jpg'
import category6 from '../../image/category6.jpg'
import category7 from '../../image/category7.jpg'
import category8 from '../../image/category8.jpg'
import category9 from '../../image/category9.jpg'
import category10 from '../../image/category10.jpg'
import category11 from '../../image/category11.jpg'
import category12 from '../../image/category12.jpg'
import category13 from '../../image/category13.jpg'
import category14 from '../../image/category14.jpg'


const Maininput = () => {
  return (
    <StWrap>
      <InputBox>
        <input className="input" type="text" placeholder='찾는 메뉴가 뭐예요?'
        />
        <SearchButton>
          <FontAwesomeIcon className='icon' icon={faMagnifyingGlass}
            color={"black"}
          />
        </SearchButton>
      </InputBox>
      <CategoryBody>
        <Categorybox>
          <img src={category1} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category2} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category3} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category4} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category5} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category6} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category7} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category8} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category9} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category10} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category11} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category12} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category13} alt=""/>
        </Categorybox>
        <Categorybox>
          <img src={category14} alt=""/>
        </Categorybox>
      </CategoryBody>
    </StWrap>
  );
}

export default Maininput;

const StWrap = styled.div`
  ${flex({direction:'column'})}
  width: 100%;
  height: 100%;
  background-color: var(--white);
`;


const InputBox = styled.div`
  ${flex({})}
  width: calc(100vh - 60vh);
  height: 100px;
  margin-bottom: 1rem;
  & > input{
    width: 70%;
    height: 50px;
    border: none;
    border-bottom: 1px solid var(--font-secondary);
  }
`;

const CategoryBody = styled.div`
  ${flex({gap:'3px'})}
  flex-wrap: wrap;
  width: calc(100vh - 60vh);
  background-color: var(--primary);
  padding: 1rem;

`;

const Categorybox = styled.div`
  & > img{
    width: 100px;
  }
`;

const SearchButton = styled.button`
  width: 70px;
  height: 50px;
  border: none;
  border-radius: 5px;
  & > .icon{
    font-size: large;
  }
`;
