// import { useCallback, useEffect, useState } from "react";

// type FormState<F extends FormData> = {
//   [K in keyof F]: FormValue<F[K]>;
// };

// type FormValue<V> = {
//   value: V;
//   isValid: boolean;
//   invalidReason: number | null;
// };

// type Validators<F extends FormData> = {
//   [K in keyof F]: IsValid<FormState<F>, F[K]>[];
// };

// type IsValid<F, V> = (value: V, form: F) => boolean;

// function createFormState<F extends FormData>(initialForm: F): FormState<F> {
//   return Object.entries(initialForm).reduce(
//     (acc, [key, value]) => ({
//       ...acc,
//       [key]: {
//         value,
//         isValid: true,
//         invalidReason: undefined,
//       },
//     }),
//     {},
//   ) as FormState<F>;
// }

// function useForm<F extends FormData>(
//   initialForm: F,
//   validators: Validators<F>,
// ) {
//   const [form, setForm] = useState<FormState<F>>(createFormState(initialForm));
//   const updateForm = useCallback(<K extends keyof F>(key: K, value: F[K]) => {
//     const validator = validators[key];
//     const reason = validator.findIndex(isValid => !isValid(value, form));

//     if (reason === -1) {
//       if (form[key].isValid)
//     }
//   }, []);
// }
