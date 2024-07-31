import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutationInitialSetting } from "@/hooks/mutation/useMutationInitialSetting";

export const FormSchema = z.object({
  nickname: z.string(),
  categories: z.array(z.string()),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

export const useStackForm = () => {
  const { mutateAsync, isPending } = useMutationInitialSetting();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nickname: "",
      categories: [],
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormSchemaType) => {
    const { nickname, categories } = data;
    const userEmail = localStorage.getItem("userEmail");

    const result = await mutateAsync({
      userEmail: userEmail!,
      userName: nickname,
      categories: categories,
    });
    //TODO: api 연결할 부분
    return result;
  };

  return { form, onSubmit, isPending };
};
