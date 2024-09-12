import Page from "@pages/Page";

import LoginForm from "@components/login/LoginForm";
import Title from "@components/common/Title";

function LoginPage() {
  return (
    <Page>
      <Title height="200px" bottom="32px" fontSize="3rem" fontWeight="700">
        환영합니다
      </Title>
      <LoginForm />
    </Page>
  );
}

export default LoginPage;
