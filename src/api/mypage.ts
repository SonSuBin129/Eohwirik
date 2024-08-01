import { MyPageRequestParams, MyPageResponse } from "@/types/myPageType";

import { instance } from "@/api/instance";

export const myPage = async ({ userEmail }: MyPageRequestParams) => {
  const { data } = await instance.post<MyPageResponse>("/user/mypage", {
    userEmail,
  });

  return data;
};
