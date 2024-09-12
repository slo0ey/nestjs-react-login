import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: linear-gradient(90deg, rgb(63, 66, 242) 0%, rgb(126, 20, 255) 100%);
    --primary-bg: linear-gradient(90deg, rgba(63, 66, 242, 80%) 0%, rgba(126, 20, 255, 80%) 100%);
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Pretendard', sans-serif;
  }
`;

export default GlobalStyle;
