import { useRef } from "react";

import useValidator from "@hooks/useValidator";
import { RegisterData } from "@utils/types";
import { NOT_EMPTY, ID, EMAIL, PASSWORD, SAME_PASSWORD } from "@utils/validate";

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
    SAME_PASSWORD(registerData.current.password),
  ]);

  return <form></form>;
}

export default RegisterForm;
