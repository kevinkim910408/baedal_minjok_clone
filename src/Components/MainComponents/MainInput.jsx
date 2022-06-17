import styled, { css } from 'styled-components'


const Maininput = () => {
  return (
    <>

      <input type="text" placeholder='아이디' required />
      <button type="click" />
    </>
  );
}

export default Maininput;

const MainInputbox = styled.div`
width: calc(100vh - 60vh);
  height: 60px;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid var(--font-secondary);
  margin-bottom: 2rem;
  &::placeholder{
    font-size: 1rem;
  }
`
const MainButton = styled.button`
  font-size: 1.5rem;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
`;

const Btn = styled.button`
  padding: 1rem;
  color: ${(props) => (!props.border ? "#888888;" : "#444444;")};
  font-weight: 700;
  border: ${(props) => (!props.border ? "0;" : "border: 1px solid #dddddd;")};
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    ${(props) =>
    !props.border
      ? css`
            color: #000000;
          `
      : css`
            background-color: #000000;
            color: #ffffff;
          `}
  }
`;
