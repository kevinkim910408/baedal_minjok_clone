import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
${reset} // normalize

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}
a:visited{
    color:inherit;
}

input:focus {
    outline: none;
    box-shadow: none;
}

button:disabled{
  background-color: var(--font-secondary);
}

input[type=submit]:hover:enabled,
button:hover:enabled{
    background-color: var(--primary-hover);
}

input[type=submit],
button{
    color: var(--white);
    background-color: var(--primary);
    border: none;
}

input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

body {
    background-color: var(--white);
    -ms-overflow-style: none;
    font-family: 'BMDOHYEON';
    }
::-webkit-scrollbar {
    display: none;
    
}

:root {
    --primary: #2ec2b8;
    --primary-hover: #20a097;
    --font-main: #0f0f0f;
    --font-secondary:#cbcbcb;
    --Line:#f4f4f4;
    --purple: #8e44ad;
    --yellow: #fff200;
    --pink: #ffcccc;
    --orange: #ff9f1a;
    --white: #fff;
    --black: #000;
    --blue: #4D7CFE;
    --red: #e00303;
}
`;

export default GlobalStyle;