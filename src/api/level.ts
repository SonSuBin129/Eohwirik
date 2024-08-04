import { getLevelResponse } from "@/types/levelType";

import { instance } from "@/api/instance";

export const getLevelStatus = async () => {
  const { data } = await instance.get<getLevelResponse>("/user/levelpage");

  return data;
};
