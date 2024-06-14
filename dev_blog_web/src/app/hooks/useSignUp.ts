import { useMutation } from "react-query";
import axios from "../axios";

export interface SignUpParams {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const onMutate = async (params: SignUpParams) => {
  const { username, email, password, confirmPassword } = params;
  await axios.post("/api/registration", {
    user: {
      username: username,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    },
  });
};

const useSignUp = (
  onSuccess?: (data: void, variables: SignUpParams, context: any) => void,
  onError?: (error: any, variables: SignUpParams, context: any) => void
) => {
  return useMutation(onMutate, {
    onSuccess,
    onError,
  });
};

export default useSignUp;