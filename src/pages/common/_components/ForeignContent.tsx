import ForeignContentImage from "@/assets/commonknowledge/ForeignContent.png";

const ForeignContent = () => {
  return (
    <main className="flex w-full flex-col items-center gap-[45px] px-4 pb-9 pt-6">
      <div className="flex w-full justify-center">
        <img src={ForeignContentImage} loading="lazy" />
      </div>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">웬지 VS 왠지</h1>
        <div className="text-base font-medium">
          ‘왠지’는 ‘왜인지’의 줄임말로, ‘웬지’는 맞춤법에 어긋난 표현입니다.
          ‘웬’은 ‘어찌된’, ‘어떠한’이라는 뜻을 지녀 ‘웬일’, ‘웬만하면’ 등의
          표현으로 쓰입니다.
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">든지 VS 던지</h1>
        <div className="flex flex-col gap-[10px]">
          <div className="text-base font-medium">
            ‘-던’과 ‘-든’은 발음이 비슷하기 때문에 많이들 혼동하는 맞춤법입니다.
            ‘-든지’는 선택의 의미를 지닌 연결어미로, 어느 것이든 선택될 수 있는
            상황, 또는 여러 개 중 어느 것이 일어나도 상관없다는 의미를 지니고
            있습니다.
          </div>
          <div className="flex w-full flex-col gap-[26px] rounded-[37px] border-2 border-brand px-7 py-[9px]">
            <ul className="list-inside list-disc">
              <li>그 사람이 그렇게 좋든? (X)</li>
              <li>그 사람이 그렇게 좋던? (O)</li>
            </ul>
          </div>
          <div className="text-base font-medium">
            반면에 ‘-던지’는 과거의 일을 나타내거나 감탄, 의문, 추측의 상황에서
            사용하는 어미입니다.
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">이에요 VS 이예요</h1>
        <div className="flex flex-col gap-[10px]">
          <div className="text-base font-medium">
            ‘예요’는 ‘이에요’의 준말로, 바로 앞의 체언이 받침 없는 모음으로 끝날
            때 줄여서 사용할 수 있습니다.
          </div>
          <div className="flex w-full flex-col gap-[26px] rounded-[37px] border-2 border-brand px-7 py-[9px]">
            <ul className="list-inside list-disc">
              <li>나무+이에요 → 나무예요</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">자리를 빌어 VS 자리를 빌려</h1>
        <div className="text-base font-medium">
          ‘빌어’와 ‘빌려’의 뜻은 너무나 다릅니다. 감사 인사를 하기 위해 자리를
          빌린다는 의미가 문법상 적합하기 때문에 자리를 ‘빌다’가 아닌 자리를
          ‘빌리다’가 맞는 표현입니다.
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">채 VS 체</h1>
        <div className="flex flex-col gap-[10px]">
          <div className="text-base font-medium">
            ‘체’는 ‘척, 시늉’을 의미하는 의존명사이고 ‘채’는 ‘~한 상태로’라는
            의미를 지닌 의존명사입니다. 이 두 표현은 문맥의 의미를 파악한다면
            쉽게 구분 지을 수 있습니다.
          </div>
          <div className="flex w-full flex-col gap-[26px] rounded-[37px] border-2 border-brand px-7 py-[9px]">
            <ul className="list-inside list-disc">
              <li>그는 망부석인 체로 있을 수밖에 없었다. (X)</li>
              <li>그는 망부석인 채로 있을 수밖에 없었다. (O)</li>
            </ul>
          </div>
          <div className="text-base font-medium">
            혹시라도 헷갈린다면 ‘체’와 ‘채’ 자리에 ‘척’을 넣어 의미가 통하면
            ‘체’, 의미가 통하지 않는다면 ‘채’가 맞습니다. 금방 구분하실 수
            있겠죠?
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">된다 VS 됀다</h1>
        <div className="text-base font-medium">
          ‘되’와 ‘돼’도 많이 헷갈려하는 맞춤법 중 하나입니다. ‘-돼’는 ‘-되어’의
          준말이기 때문에 ‘되’/‘돼’ 대신에 ‘되어’를 넣어 의미가 통한다면 ‘돼’가
          맞는 표현입니다. 또 하나, ‘되’ 대신에 ‘하’, ‘돼’ 대신에 ‘해’를 넣어
          확인해보는 것도 좋은 방법입니다.
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">간간이 VS 간간히</h1>
        <div className="text-base font-medium">
          ‘간간이’는 사이 간(間)이 들어간 부사로, 말 그대로 시간이나 공간의
          간격이 듬성듬성하다는 의미로 사용됩니다. ‘간간히’는 여러 뜻을 가지고
          있습니다. 그러니 ‘가끔씩’의 의미로 쓸 경우라면 꼭 ‘간간이’로 써주어야
          하겠습니다.
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="text-base font-medium">
          이렇게 한국인도 자주 헷갈리는 한국어 맞춤법에 대해 간단히
          살펴보았습니다. 상호 소통과 이해를 위해 한국인이라면 맞춤법은 바로
          알아야겠죠?
        </div>
      </section>
    </main>
  );
};

export default ForeignContent;
