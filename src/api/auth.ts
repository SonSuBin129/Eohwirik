import { LoginRequestParams } from "@/types/authType";

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
