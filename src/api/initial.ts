import { instance } from "@/api/instance";
import { InitialSettingRequestParams } from "@/types/initialType";

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
