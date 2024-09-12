import { useState } from "react";

export type Scenario = {
  type: string;
  validate: (value: string) => boolean;
};

type ValueState = {
  status: "complete" | "pending" | "error";
  invalidReason: string | null;
};

type Validator = (value: string) => void;

function useValidator(scenarios: Scenario[]): [ValueState, Validator] {
  const [valueState, setValueState] = useState<ValueState>({
    status: "pending",
    invalidReason: null,
  });

  const validate = (value: string) => {
    const scenario = scenarios.find(
      ({ validate: _validate }) => !_validate(value),
    );

    if (scenario === undefined) {
      setValueState({
        status: "complete",
        invalidReason: null,
      });
    } else {
      setValueState({
        status: "error",
        invalidReason: scenario.type,
      });
    }
  };

  return [valueState, validate];
}

export default useValidator;
