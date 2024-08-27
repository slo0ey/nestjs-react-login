import styled from "styled-components";

const StyledWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 200px;
  margin-bottom: 32px;
  font-size: 3rem;
  font-weight: 700;
  color: transparent;
  background: var(--primary), linear-gradient(#fff, #fff);
  background-origin: content-box;
  background-clip: text, content-box;
`;

function LoginTitle() {
  return <StyledWrapper>환영합니다</StyledWrapper>;
}

export default LoginTitle;
