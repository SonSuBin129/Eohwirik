import { useMutation } from "@tanstack/react-query";

import { MyPageRequestParams, MyPageResponse } from "@/types/myPageType";

import { myPage } from "@/api/mypage";

export const useMutationMyPage = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail }: MyPageRequestParams) => myPage({ userEmail }),
    onSuccess: (data: MyPageResponse) => {
      return data;
    },
  });

  return mutation;
};
