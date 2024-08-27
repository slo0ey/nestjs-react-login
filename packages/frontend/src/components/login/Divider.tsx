import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 12px;
  position: relative;
`;

const Line = styled.div`
  width: 420px;
  height: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--primary);
`;

const Label = styled.span`
  display: inline-block;
  height: 12px;
  padding: 0 8px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-size: 0.75rem;
  color: transparent;
  background: var(--primary), linear-gradient(#fff, #fff);
  background-origin: padding-box;
  background-clip: text, padding-box;
`;

function Divider() {
  return (
    <StyledWrapper>
      <Label>혹은</Label>
      <Line />
    </StyledWrapper>
  );
}

export default Divider;
