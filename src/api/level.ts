import { getLevelResponse, getLevelParams } from "@/types/levelType";

import { instance } from "@/api/instance";

export const getLevelStatus = async ({ userEmail }: getLevelParams) => {
  const { data } = await instance.post<getLevelResponse>("/user/levelpage", {
    userEmail,
  });

  return data;
};
