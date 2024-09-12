import styled from "styled-components";

type TitleProps = {
  children: string;
  width?: string;
  height: string;
  bottom: string;
  fontSize: string;
  fontWeight: string;
};

const StyledWrapper = styled.h1<Omit<TitleProps, "children">>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.bottom};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: transparent;
  background: var(--primary), linear-gradient(#fff, #fff);
  background-origin: content-box;
  background-clip: text, content-box;
`;

function Title({
  children,
  width = "420px",
  height,
  bottom,
  fontSize,
  fontWeight,
}: TitleProps) {
  return (
    <StyledWrapper
      width={width}
      height={height}
      bottom={bottom}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </StyledWrapper>
  );
}

export default Title;
