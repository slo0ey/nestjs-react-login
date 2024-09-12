import Page from "@pages/Page";

import Title from "@components/common/Title";
import RegisterForm from "@components/register/RegisterForm";

function RegisterPage() {
  return (
    <Page>
      <Title height="120px" bottom="32px" fontSize="2.25rem" fontWeight="700px">
        회원가입
      </Title>
      <RegisterForm />
    </Page>
  );
}

export default RegisterPage;
