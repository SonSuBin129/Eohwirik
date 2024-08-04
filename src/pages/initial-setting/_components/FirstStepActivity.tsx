import { useState } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NumberIcon from "@/components/Icons/NumberIcon";

import NickNameField from "./NickNameField";
import NextStepButton from "./NextStepButton";
import ErrorMentBox from "./ErrorMentBox";
import {
  Activity,
  ActivityContent,
  ActivityHeader,
  ActivityFooter,
} from "./Activity";

const FirstStepActivity: ActivityComponentType = () => {
  const step = 1;

  const [nickname, setNickName] = useState("");
  const [isPass, setIsPass] = useState(false);
  const [errorMent, setErrorMent] = useState("");

  const handleNickName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
    if (event.target.value.length === 0) {
      setIsPass(false);
      setErrorMent("닉네임을 입력해주세요.");
    } else {
      setIsPass(true);
      setErrorMent("사용 가능한 닉네임 입니다.");
    }
  };

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <NumberIcon number={step} />
            <h1 className="text-2xl font-bold">뭐라고 불러드릴까요?</h1>
          </ActivityHeader>
          <section className="flex grow flex-col gap-[10px]">
            <NickNameField value={nickname} onChange={handleNickName} />
            <ErrorMentBox isPass={isPass} ment={errorMent} />
          </section>
          <ActivityFooter>
            <NextStepButton
              activityName={"SecondStepActivity" as never}
              disabled={!isPass}
              params={{
                step: step + 1,
                nickname: nickname,
              }}
            ></NextStepButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default FirstStepActivity;
