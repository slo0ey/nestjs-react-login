import styled from "styled-components";

import ic_checked from "@icons/checked.svg";
import ic_unchecked from "@icons/unchecked.svg";

type CheckBoxProps = {
  name: string;
  label: string;
  onChange: (value: boolean) => void;
};

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const InnerInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background-image: url(${ic_unchecked});
  appearance: none;

  &:checked {
    background-image: url(${ic_checked});
  }
`;

const Label = styled.label`
  color: #8a8a8a;
  font-size: 0.875rem;
  cursor: pointer;
`;

function CheckBox({ name, label, onChange }: CheckBoxProps) {
  return (
    <StyledWrapper>
      <InnerInput
        id={`id_${name}`}
        name={name}
        type="checkbox"
        onChange={(event) => onChange(event.target.checked)}
      />
      <Label htmlFor={`id_${name}`}>{label}</Label>
    </StyledWrapper>
  );
}

export default CheckBox;
