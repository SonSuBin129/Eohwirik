const ServiceExplainSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-1">
      <div className="w-full text-base font-medium">이용 안내</div>
      <section className="flex w-full flex-col gap-4 rounded-[15px] border-2 border-brandGray px-5 py-4 text-[15px] font-normal">
        <div className="flex gap-2">
          <p className="inline-block">앱 버전</p>
          <p className="inline-block text-[#636363]">ver 1.0</p>
        </div>
        <div>문의하기</div>
        <div>서비스 이용약관</div>
        <div>개인정보 처리방침</div>
        <div>오픈소스 라이선스</div>
      </section>
    </div>
  );
};

export default ServiceExplainSection;
