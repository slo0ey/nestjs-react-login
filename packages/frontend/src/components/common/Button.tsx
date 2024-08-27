import styled, { css } from "styled-components";

type ButtonTheme = "filled" | "outlined";

type ButtonProps = {
  children: React.ReactNode;
  theme: ButtonTheme;
  tabIndex: number | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Filled = css`
  color: white;
  border: none;
  border-radius: 30px;
  background: var(--primary);
`;

const Outlined = css`
  color: transparent;
  border: 1px solid transparent;
  border-radius: 30px;
  background: var(--primary), linear-gradient(#fff, #fff), var(--primary);
  background-origin: border-box;
  background-clip: text, content-box, border-box;
`;

const StyledWrapper = styled.button<{ buttontheme: ButtonTheme }>`
  display: block;
  width: 420px;
  height: 60px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  ${({ buttontheme: buttonTheme }) =>
    buttonTheme == "filled" ? Filled : Outlined}
`;

function Button({ children, theme, tabIndex, onClick }: ButtonProps) {
  return (
    <StyledWrapper
      buttontheme={theme}
      tabIndex={tabIndex}
      onClick={(event) => {
        event.preventDefault();
        onClick(event);
      }}
    >
      {children}
    </StyledWrapper>
  );
}

export default Button;
