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
    <>
      <Inputbox>
        <input className="input" type="text" placeholder='찾는 메뉴가 뭐예요?'
        />
        <Searchbutton>
          <FontAwesomeIcon className='icon' icon={faMagnifyingGlass}
            color={"black"}
          />
        </Searchbutton>
      </Inputbox><br />
      <Categorybody>
        <Categorybox>
          <img src={category1} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category2} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category3} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category4} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category5} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category6} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category7} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category8} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category9} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category10} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category11} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category12} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category13} style={{ width: '150px' }} />
        </Categorybox>
        <Categorybox>
          <img src={category14} style={{ width: '150px' }} />
        </Categorybox>
      </Categorybody>
    </>
  );
}

export default Maininput;

// const MainButton = styled.button`
//   font-size: 1.5rem;
//   border: none;
//   border-radius: 10px;
//   padding: 0.5rem;
// `;

const Inputbox = styled.div`
${flex({ direction: 'column' })}
height: 100px;
width: 100%;
`;

const Searchbutton = styled.button`
  height: 50px;
  width: 50px;
`;

const Categorybody = styled.button`
`;

const Categorybox = styled.button`
cursor: pointer;
`;

const input = styled.button`
${flex({ direction: "column", gap: "24px" })}
`;


