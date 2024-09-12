import { useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import Input from "@components/common/Input";
import CheckBox from "@components/login/CheckBox";
import Divider from "@components/login/Divider";

import { type LoginData } from "@utils/types";

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;
`;

const More = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LostPassword = styled(Link)`
  color: #8a8a8a;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SubmitArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

function LoginForm() {
  const navigate = useNavigate();
  const loginData = useRef<LoginData>({
    id: "",
    password: "",
    keep: false,
  });

  return (
    <form>
      <InputArea>
        <Input
          name="id"
          label="아이디"
          type="text"
          tabIndex={1}
          onChange={(value) => (loginData.current.id = value)}
        />
        <Input
          name="pw"
          label="비밀번호"
          type="password"
          tabIndex={2}
          onChange={(value) => (loginData.current.password = value)}
        />
        <More>
          <CheckBox
            name="keep"
            label="로그인 유지"
            tabIndex={3}
            onChange={(value) => (loginData.current.keep = value)}
          />
          <LostPassword to=".">비밀번호를 잊으셨나요?</LostPassword>
        </More>
      </InputArea>
      <SubmitArea>
        <Button
          theme="filled"
          tabIndex={4}
          onClick={() => {
            const { id, password, keep } = loginData.current;
            console.log(`id: ${id} pw: ${password} keep: ${keep}`);
          }}
        >
          로그인
        </Button>
        <Divider />
        <Button
          theme="outlined"
          tabIndex={5}
          onClick={() => navigate("/register")}
        >
          회원가입
        </Button>
      </SubmitArea>
    </form>
  );
}

export default LoginForm;
