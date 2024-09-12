import { type Scenario } from "@hooks/useValidator";

const id_pattern = /^[a-z0-9]{6,16}$/;
const email_pattern =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const pw_pattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export const NOT_EMPTY: Scenario = {
  type: "EMPTY",
  validate: (value) => value.trim().length > 0,
};

export const ID: Scenario = {
  type: "WRONG_ID",
  validate: (value) => id_pattern.test(value.trim()),
};

export const EMAIL: Scenario = {
  type: "WRONG_EMAIL",
  validate: (value) => email_pattern.test(value.trim()),
};

export const PASSWORD: Scenario = {
  type: "WRONG_PW",
  validate: (value) => pw_pattern.test(value),
};

export const SAME_PASSWORD = (passwordResolver: () => string) =>
  ({
    type: "DIFF_PW",
    validate: (value) => passwordResolver() === value,
  }) as Scenario;
