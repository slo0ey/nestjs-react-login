import { type FocusEvent, useRef, useState } from "react";
import styled from "styled-components";

import ic_clear from "@icons/clear.svg";
import ic_hide from "@icons/hide.svg";
import ic_show from "@icons/show.svg";

type InputTheme = "complete" | "pending" | "error";

type InputProps = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  tabIndex: number | undefined;
  theme?: InputTheme;
  onChange?: (value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
};

type InputState = "none" | "focused" | "written";

const borderColors: Record<InputTheme, string> = {
  complete: "var(--primary)",
  pending: "#8a8a8a",
  error: "#ff0000",
};

const StyledWrapper = styled.div<{ inputtheme: InputTheme }>`
  display: flex;
  justify-content: end;
  width: 420px;
  height: 60px;
  padding: 10px;
  position: relative;
  border: 1px solid transparent;
  border-radius: 8px;
  background: linear-gradient(#f7f7f7, #f7f7f7),
    ${({ inputtheme }) => borderColors[inputtheme]};
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

const Label = styled.label<{ minimize: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 22px;
  position: absolute;
  left: 20px;
  bottom: ${({ minimize }) => (minimize == "true" ? "30px" : "18px")};
  color: #8a8a8a;
  font-size: ${({ minimize }) => (minimize == "true" ? "0.75rem" : "1rem")};
  letter-spacing: ${({ minimize }) => (minimize == "true" ? "-0.6px" : "0px")};
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0s;
`;

const InnerInput = styled.input`
  width: 280px;
  position: absolute;
  left: 20px;
  bottom: 10px;
  border: none;
  background: none;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
    cursor: auto;
  }
`;

const Action = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

function Input({
  name,
  label,
  type,
  tabIndex,
  theme,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}: InputProps) {
  const [inputState, setInputState] = useState<InputState>("none");
  const [hide, setHide] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <StyledWrapper inputtheme={theme || "complete"}>
      <Label
        htmlFor={`id_${name}`}
        aria-hidden="true"
        minimize={(inputState != "none").toString()}
      >
        {label}
      </Label>
      <InnerInput
        id={`id_${name}`}
        name={name}
        type={hide ? type : "text"}
        tabIndex={tabIndex}
        onChange={(event) => onChange(event.target.value)}
        onFocus={(event) => {
          setInputState("focused");
          onFocus(event);
        }}
        onBlur={(event) => {
          if (event.target.value.length === 0) {
            setInputState("none");
          } else {
            setInputState("written");
          }
          onBlur(event);
        }}
        ref={inputRef}
        spellCheck="false"
        autoCapitalize="none"
      />
      {inputState !== "none" && (
        <>
          {type === "password" && (
            <Action
              type="button"
              tabIndex={-1}
              onClick={() => {
                setHide(!hide);
              }}
            >
              <Icon src={hide ? ic_hide : ic_show} />
            </Action>
          )}
          <Action
            type="button"
            tabIndex={-1}
            onClick={() => {
              if (inputRef.current) {
                onChange((inputRef.current.value = ""));
                setInputState("none");
              }
            }}
          >
            <Icon src={ic_clear} />
          </Action>
        </>
      )}
    </StyledWrapper>
  );
}

export default Input;
