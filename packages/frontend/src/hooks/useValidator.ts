import { useState } from "react";

export type Scenario = {
  type: string;
  validate: (value: string) => boolean;
};

type ValueState = {
  isValid: boolean;
  invalidReason: string | null;
};

type Validator = (value: string) => void;

function useValidator(scenarios: Scenario[]): [ValueState, Validator] {
  const [valueState, setValueState] = useState<ValueState>({
    isValid: false,
    invalidReason: scenarios[0].type,
  });

  const validate = (value: string) => {
    const scenario = scenarios.find(
      ({ validate: _validate }) => !_validate(value),
    );

    if (scenario === undefined) {
      setValueState({
        isValid: true,
        invalidReason: null,
      });
    } else {
      setValueState({
        isValid: false,
        invalidReason: scenario.type,
      });
    }
  };

  return [valueState, validate];
}

export default useValidator;
