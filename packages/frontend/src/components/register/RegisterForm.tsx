import { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Input from "@components/common/Input";
import Feedback from "@components/common/Feedback";
import Button from "@components/common/Button";

import useValidator from "@hooks/useValidator";
import { RegisterData } from "@utils/types";
import { NOT_EMPTY, ID, EMAIL, PASSWORD, SAME_PASSWORD } from "@utils/validate";
import {
  ERROR_EMAIL_MESSAGE,
  ERROR_ID_MESSAGE,
  ERROR_PASSWORD_MESSAGE,
} from "@utils/errors";

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-bottom: 64px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GoBack = styled.div`
  color: #8a8a8a;
  font-size: 0.875rem;
`;

const feedback = (feedbacks: Record<string, string>, reason: string | null) => {
  if (reason === null) return "";
  return feedbacks[reason];
};

function RegisterForm() {
  const registerData = useRef<RegisterData>({
    id: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [idState, validateId] = useValidator([NOT_EMPTY, ID]);
  const [emailState, validateEmail] = useValidator([NOT_EMPTY, EMAIL]);
  const [passState, validatePass] = useValidator([NOT_EMPTY, PASSWORD]);
  const [passConfirmState, validatePassConfirm] = useValidator([
    NOT_EMPTY,
    SAME_PASSWORD(() => registerData.current.password),
  ]);

  return (
    <form>
      <InputArea>
        <Input
          name="id"
          label="아이디"
          type="text"
          tabIndex={1}
          theme={idState.status}
          onChange={(value) => (registerData.current.id = value)}
          onBlur={() => validateId(registerData.current.id)}
        />
        <Feedback status={idState.status}>
          {feedback(ERROR_ID_MESSAGE, idState.invalidReason)}
        </Feedback>
        <Input
          name="email"
          label="이메일"
          type="email"
          tabIndex={2}
          theme={emailState.status}
          onChange={(value) => (registerData.current.email = value)}
          onBlur={() => validateEmail(registerData.current.email)}
        />
        <Feedback status={emailState.status}>
          {feedback(ERROR_EMAIL_MESSAGE, emailState.invalidReason)}
        </Feedback>
        <Input
          name="password"
          label="비밀번호"
          type="password"
          tabIndex={3}
          theme={passState.status}
          onChange={(value) => (registerData.current.password = value)}
          onBlur={() => {
            validatePass(registerData.current.password);
            validatePassConfirm(registerData.current.passwordConfirm);
          }}
        />
        <Feedback status={passState.status}>
          {feedback(ERROR_PASSWORD_MESSAGE, passState.invalidReason)}
        </Feedback>
        <Input
          name="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          tabIndex={4}
          theme={passConfirmState.status}
          onChange={(value) => (registerData.current.passwordConfirm = value)}
          onBlur={() =>
            validatePassConfirm(registerData.current.passwordConfirm)
          }
        />
        <Row>
          <Feedback status={passConfirmState.status}>
            {feedback(ERROR_PASSWORD_MESSAGE, passConfirmState.invalidReason)}
          </Feedback>
          <GoBack>
            {"이미 계정이 있나요? "}
            <Link
              style={{ color: "#0077FF", textDecoration: "underline" }}
              to="/"
            >
              로그인 하기
            </Link>
          </GoBack>
        </Row>
      </InputArea>
      <Button
        theme="filled"
        tabIndex={5}
        onClick={() => {
          const { id, email, password, passwordConfirm } = registerData.current;

          // 강제로 한번더 체크
          validateId(id);
          validateEmail(email);
          validatePass(password);
          validatePassConfirm(passwordConfirm);

          console.log(
            `id: ${id} email: ${email} pw: ${password} pwconf: ${passwordConfirm}`,
          );
        }}
      >
        회원가입
      </Button>
    </form>
  );
}

export default RegisterForm;
