import MoneyContent2 from "@/assets/commonknowledge/MoneyContent2.png";
import MoneyContentImage from "@/assets/commonknowledge/MoneyContent.png";

const MoneyContent = () => {
  return (
    <main className="flex w-full flex-col items-center gap-[45px] px-4 pb-9 pt-6">
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">
          배임? 횡령? 같은 듯 다른 어휘 파헤치기
        </h1>
        <div className="flex w-full justify-center">
          <img src={MoneyContentImage} loading="lazy" />
        </div>
        <div className="text-base font-medium">
          뉴스를 보면 가끔 '직원이 얼마를 횡령했다' 아니면 누가 '업무상 배임으로
          처벌을 받았다' 이런 뉴스를 보시는 경우가 있을겁니다.
          <br />
          <br /> 회사를 운영하시는 분 같은 경우에는 직원이 횡령, 배임을 해서
          손해를 보시는 경우가 있고 또 직원들 같은 경우에는 내가 어떤 돈을
          쓰거나 결정을 했는데 그것이 횡령, 배임이 된다 이런 일로 해서
          회사로부터 고소를 당하거나 이런 경우들이 종종 생기는 거 같습니다.
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">횡령과 배임의 차이</h1>
        <div className="flex w-full flex-col items-center gap-[26px] rounded-[37px] border-2 border-brand px-[18px] py-5">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-xl font-bold text-brand">횡령이란?</h1>
            <p className="text-base font-medium">
              누군가 타인의 재물을 권리가 없는데 가져온다거나 아니면 그것을
              쓴다거나 아니면 반환을 거부하는걸 횡령이라고 합니다.
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-xl font-bold text-brand">배임이란?</h1>
            <p className="text-base font-medium">
              내가 누군가 다른 사람의 업무를 처리하는데 그 사람에게 이익이
              되도록 처리해야 하는데 그러지 않고 나의 이익이나 아니면 제 3자의
              이익을 위해서 일을 해서 그 업무를 나한테 맡긴 사람한테 손해를
              줬을때 그런 범죄를 배임죄라고 합니다.
            </p>
          </div>
        </div>
        <div className="text-base font-medium">
          횡령과 배임의 구분은 실제로 돈이라든가 아니면 그 밖에 유형의 재물과
          관련된 부분이라면 횡령을 한 거라고 보시면 되고 그것이 아니고 무형이
          어떤 재산적 이익이 있다고 하면 배임죄로 생각하시면 됩니다. <br />
          <br />
          보통은 횡령과 배임 모두 다 타인의 물건이나 재산, 업무 이런 것과 관련된
          것이기 때문에 꼭 세트로 움직이는 그런 범죄라고 생각하시면 됩니다.
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">일상 속 오독 사례</h1>
        <div className="text-base font-medium">
          먼저 심심한 사과, 금일, 고지식, 익일, 모집인원 0명 등등의 어휘들은
          고급 단위가 아님에도 일상 곳곳에서 일어나고 있는 오독의 현상을
          보여줍니다. 심심한 사과라는 말은 뉴스나 언론에서 종종 접하는 말로 마음
          깊이 사과한다는 뜻입니다. 그런데 지루한 사과라고 잘못 이해하고 있는
          경우가 있습니다. 금일도 금요일로 이해를 하고 고지식(固知識)은 융통성이
          없는 사람을 표현할 때 쓰는 말인데 고(高)지식으로 알고 있기도 합니다.
          경북의 한 학교에서 스승의 날 어느 중학생이 선생님께 쓴 편지글에서
          “선생님, 잘 가르쳐 주셔서 감사합니다. 정말 고지식 하세요”라고 적었다고
          합니다. 순간 선생님이 당황했지만 다시 보니 학생이 고지식을 높은
          지식으로 잘못 알고 있음을 알았다고 합니다. 대구의 한 대학교에서는
          대학생들이 교재나 참고 자료를 제대로 읽어내는 데 어려움을 겪는 걸 보고
          대입 면접에서 짧은 지문을 주고 그 지문이 이야기하는 바가 무엇인지
          간단하게 정리하게 하고 면접관이 몇 가지 질문을 던지는 방식을 도입한
          경우도 있다고 합니다.
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">회사에서의 횡령과 배임</h1>
        <div className="flex w-full justify-center">
          <img src={MoneyContent2} loading="lazy" />
        </div>
        <div className="text-base font-medium">
          횡령과 배임은 다양한 유형으로 나타납니다. 회사를 기준으로 보면,
          직원들이 할 수 있는 업무상 횡령, 업무상 배임은 유형화되어 있습니다.
          <br />
          <br />
          횡령 같은 경우, 자금을 관리하는 사람이 회사의 업무와 관련되지 않은
          부분에 회삿돈을 쓰는 경우를 말합니다.
          <br />
          <br />
          영업사원 같은 경우, 회사에서 월급을 받고 있으니 회사에 매출이
          발생하도록 업무를 처리해야 합니다. 그런데 영업 대상 사람이 다른 회사로
          매출이 발생할 수 있도록 했다면 이는 배임행위가 됩니다.
        </div>
      </section>
    </main>
  );
};

export default MoneyContent;
