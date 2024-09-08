import { createGlobalStyle } from "styled-components";
import PretendardLight from "@fonts/Pretendard-Light.woff2";
import PretendardRegular from "@fonts/Pretendard-Regular.woff2";
import PretendardSemiBold from "@fonts/Pretendard-SemiBold.woff2";
import PretendardBold from "@fonts/Pretendard-Bold.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Light'), url(${PretendardLight}) format("woff2");
    font-weight: 300;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Regular'), url(${PretendardRegular}) format("woff2");
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-SemiBold'), url(${PretendardSemiBold}) format("woff2");
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Bold'), url(${PretendardBold}) format("woff2");
    font-weight: 700;
  }

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
