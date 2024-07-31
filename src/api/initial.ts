import { InitialSettingRequestParams } from "@/types/initialType";

import { instance } from "@/api/instance";

export const initialSetting = async ({
  userEmail,
  userName,
  categories,
}: InitialSettingRequestParams) => {
  const { data } = await instance.post("/user/initial-setting", {
    userEmail,
    userName,
    categories,
  });

  return data;
};
