import Logo from "@/components/Logo";
import { MailInputField } from "@/pages/login/_components/MailInputField";
import { PWInputField } from "@/pages/login/_components/PWInputField";
import { Link, useNavigate } from "@/router";
import { Button } from "@ui/components/ui/button";
import { useToast } from "@ui/components/ui/use-toast";
import { ChangeEvent, useState } from "react";
import { useMutationLogin } from "@/hooks/mutation/useMutationLogin";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const mutation = useMutationLogin();

  const [values, setValues] = useState({
    option1: "",
    option2: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues(prevValues => {
      const { name, value } = event.target;
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  let toastContent = "이메일 또는 비밀번호를 확인해주세요.";
  const handleLogin = () => {
    if (values.option1 === "") {
      toastContent = "이메일을 입력해주세요.";
    } else if (values.option2 === "") {
      toastContent = "비밀번호를 입력해주세요.";
    } else {
      // 백엔드 로그인 API 연결
      mutation.mutate({
        userEmail: values.option1,
        userPassword: values.option2,
      });
    }

    toast({
      title: toastContent,
      variant: "brandDestructive",
    });
  };

  return (
    <main className="flex h-full flex-col items-center justify-center gap-10 px-4">
      <section className="flex flex-col items-center justify-center gap-3">
        <Logo size={"20%"} />
        <div>서비스명 이미지로 들어올 것</div>
      </section>
      <main className="flex w-full flex-col gap-5">
        <MailInputField
          placeholder="이메일을 입력해주세요."
          name="option1"
          value={values.option1}
          onChange={handleChange}
          autoComplete="off"
        />
        <PWInputField
          placeholder="비밀번호를 입력해주세요."
          name="option2"
          value={values.option2}
          onChange={handleChange}
          autoComplete="off"
        />
      </main>
      <footer className="flex w-full flex-col items-center gap-4">
        <Button
          variant="brand"
          className="w-full text-xl font-semibold sm:w-80"
          onClick={handleLogin}
        >
          로그인
        </Button>

        <Link to="/signup" className="w-full sm:w-80">
          <Button variant="outline" className="w-full text-xl font-semibold">
            회원가입
          </Button>
        </Link>
      </footer>
    </main>
  );
};

export default Login;
