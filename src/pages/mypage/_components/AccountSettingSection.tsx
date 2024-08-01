const AccountSettingSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-1">
      <div className="w-full text-base font-medium">계정 관리</div>
      <section className="flex w-full flex-col gap-4 rounded-[15px] border-2 border-brandGray px-5 py-4 text-[15px] font-normal">
        <div>닉네임 변경</div>
        <div>이메일 변경</div>
        <div>비밀번호 변경</div>
      </section>
    </div>
  );
};

export default AccountSettingSection;
