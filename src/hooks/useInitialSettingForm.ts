import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormSchema = z.object({
  nickname: z.string(),
  categories: z.array(z.string()),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

//TODO: 나중에 api 연결해야함.
export const useInitialSettingForm = () => {
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

    //TODO: api 연결할 부분
    return "nickname=" + nickname + " categories=" + categories;
  };

  return { form, onSubmit };
};
