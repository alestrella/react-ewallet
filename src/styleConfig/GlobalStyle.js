import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
};
body {
  position: relative;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Circe', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; 
    color: #000;
};
ul {
  list-style: none;
  padding: 0;
  
};
p, h1, h2, h3, h4, button {
  margin: 0;
  padding: 0;
};
img {
  display: block;
  max-width: 100%;
  height: auto;
};
a {
  text-decoration: none;
};
button {
  outline: none;
  border: none;
  cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.to-top-progress {
  z-index: 1111111 !important;
}
`;
