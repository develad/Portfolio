import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ff8a00),
    to(#da1b60)
  );
  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-track {
  background-color: #fff;
  background: linear-gradient(
    to right,
    #201c29,
    #201c29 1px,
    #100e17 1px,
    #100e17
  );
}

body {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyles;
