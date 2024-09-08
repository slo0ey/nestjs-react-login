type FormData = Record<string, unknown>;

interface LoginData extends FormData {
  id: string;
  password: string;
  keep: boolean;
}

interface RegisterData extends FormData {
  id: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export type { FormData, LoginData, RegisterData };
