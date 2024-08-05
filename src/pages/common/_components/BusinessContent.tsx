import BusinessContent2 from "@/assets/commonknowledge/BusinessContent2.png";
import BusinessContentImage from "@/assets/commonknowledge/BusinessContent.png";

const BusinessContent = () => {
  return (
    <main className="flex w-full flex-col items-center gap-[45px] px-4 pb-9 pt-6">
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">회사원 필수 직장 용어 모음 zip</h1>
        <div className="flex w-full justify-center">
          <img src={BusinessContentImage} loading="lazy" />
        </div>
        <div className="text-base font-medium">
          외롭고 힘들었던 취준 생활이 끝나고 드디어 첫 출근! 무엇이든지 다 할 수
          있을 것 같은 패기로 출근을 했지만, 처음 듣는 업무 용어에 당황스러운
          경험 있으셨나요? 아니면, 현재 이런 일을 겪고 계신 분들도 계실 텐데요.
          예비 직장인부터 사회초년생들은 특별히 주목해주세요! 직장생활에서
          통상적으로 사용하는 필수 용어를 미리 숙지하여 당황하거나 실수하는 일이
          없도록 어휘릭이 주요 업무 용어를 알려드릴게요!
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">ASAP</h1>
        <div className="flex w-full justify-center">
          <img src={BusinessContent2} loading="lazy" />
        </div>
        <div className="text-base font-medium">
          As Soon As Possible의 약자로 보통 '아삽' 또는 ‘에이셉’이라고 부릅니다.
          ‘가능한 한 빨리’의 의미를 담고 있어 보통 급하게 처리해야 할 업무를
          의미합니다. 누군가 ASAP이라고 말을 한다면 우선적으로 처리해야 하는
          업무임을 기억해주세요! Ex) ㅇㅇ님, 해당 프로젝트 기획안은
          아삽(ASAP)으로 처리해주세요~
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">R&R</h1>
        <div className="text-base font-medium">
          Role and Responsibility의 줄임말로 담당자나 부서가 수행해야 할 업무,
          역할, 책임, 권한 등을 의미합니다. 어떤 업무가 주어졌을 때, 누가 어떤
          내용을 맡아서 처리해야 하는지를 전달할 때 사용하는 단어죠. Ex) 이번
          프로젝트에서 ㅇㅇ님 R&R은 ~~ 입니다.
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">팔로우 업</h1>
        <div className="text-base font-medium">
          Follow-up이라는 말로 어떤 일의 후속 조치, 추후 관리, 지속적 관리를
          의미하는데요. 문서의 경우에는 내용을 추가하라는 뜻이며 외의 경우에는
          업무를 지속적으로 확인하여 챙겨달라는 의미입니다. Ex) ㅇㅇ님 제가 잠시
          자리를 비우게 되어 해당 업무 팔로우업 부탁드립니다.
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">CC</h1>
        <div className="text-base font-medium">
          Carbon Copy의 약자로 메일 참조를 뜻하는데요. 같은 내용의 메일을 다른
          사람에게도 보내는 기능입니다. 주 수신인 외에 해당 업무에 관련된 다른
          사람들을 함께 참조에 포함시켜 발송하는 것을 의미합니다. Ex) ㅇㅇ님,
          해당 메일 발송할 때 저 CC 넣어주세요~
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">FYI</h1>
        <div className="text-base font-medium">
          For Your Information의 줄임말로 “참고로 말하자면”, “참고하세요”라는
          의미를 담고 있습니다. 주로 어떤 자료나 기사를 전달하거나 아이디어를
          공유할 때 해당 내용의 모든 사항을 참고하라는 의미로 사용되는데요. 만약
          FYI가 적힌 메일이나 문서를 받았다면 보다 주의 깊게 읽어주세요!
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <div className="text-base font-medium">
          일상생활에서는 잘 쓰이지 않아 몰랐던 업무 용어들! 낯설고 헷갈리더라도
          쉽고 빠른 커뮤니케이션을 위해서는 알아두는 것이 좋겠죠? 오늘
          소개해드린 용어들만 알아도 기본은 아는 직장인! 여러분의 슬기로운 직장
          생활을 응원할게요 :)
        </div>
      </section>
    </main>
  );
};

export default BusinessContent;
