import { cn } from "@ui/lib/utils";

interface QuizAnswerItemProps {
  isAnswer?: boolean;
  word: string;
  wordClass: string;
  description: string;
  example: string;
  explanation?: string;
}

const QuizAnswerItem = (props: QuizAnswerItemProps) => {
  const { isAnswer, word, wordClass, description, example, explanation } =
    props;

  return (
    <div
      className={cn(
        "flex flex-col gap-[13px] rounded-[37px] border-2 px-5 py-[30px]",
        {
          "border-brandGray": !isAnswer,
          "border-brand": isAnswer,
        },
      )}
    >
      <section className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-0.5 text-brand">
          <div className="text-xl font-bold">{word}</div>
          <div className="flex w-fit items-center justify-center rounded-[36px] border border-brand px-[5px] py-px text-center text-[10px] font-bold">
            {wordClass}
          </div>
        </div>
        <div className="text-base font-semibold">{description}</div>
        <div className="text-[15px] text-brandSubText">{example}</div>
      </section>
      <section className="text-[15px] font-semibold">{explanation}</section>
    </div>
  );
};

export default QuizAnswerItem;
