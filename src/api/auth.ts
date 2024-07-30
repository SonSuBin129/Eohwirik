import {
  LoginRequestParams,
  CheckEmailParams,
  SignUpRequestParams,
} from "@/types/authType";

import { instance } from "@/api/instance";

export const login = async ({
  userEmail,
  userPassword,
}: LoginRequestParams) => {
  const { data } = await instance.post("/user/login", {
    userEmail,
    userPassword,
  });

  return data;
};

export const checkEmail = async ({ userEmail }: CheckEmailParams) => {
  const { data } = await instance.post("/user/email-check", {
    userEmail,
  });
  return data;
};

export const signup = async ({
  userEmail,
  userPassword,
}: SignUpRequestParams) => {
  const { data } = await instance.post("/user/save", {
    userEmail,
    userPassword,
  });

  return data;
};
