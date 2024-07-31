import { initialSetting } from "@/api/initial";

import { InitialSettingRequestParams } from "@/types/initialType";
import { useMutation } from "@tanstack/react-query";

export const useMutationInitialSetting = () => {
  const mutation = useMutation({
    mutationFn: ({
      userEmail,
      userName,
      categories,
    }: InitialSettingRequestParams) =>
      initialSetting({ userEmail, userName, categories }),
    onSuccess: (response: string) => {
      return response;
    },
  });

  return mutation;
};
