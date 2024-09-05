import { useEffect, useRef, useState } from "react";

type IsValid<T, K> = (value: K, form: T) => boolean;

type Validator<T, K = keyof T> = {
  target: K;
  scenarios: IsValid<T, K>[];
};

function useForm<T>(initialForm: T, validators: Validator<T>[]) {
  const [formData, setFormData] = useState<T>(initialForm);
  const preFormData = useRef<T>(initialForm);

  useEffect(() => {
    for (const { target, scenarios } of validators) {
      const targetValue = formData[target];
      // 값이 바뀌지 않았다면 건너뛰기
      if (targetValue === preFormData.current[target]) continue;

      preFormData.current[target] = targetValue;
    }
  }, [formData]);
}
