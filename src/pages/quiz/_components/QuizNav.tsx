import { startTransition } from "react";
import { useStack } from "@stackflow/react";

import CloseIcon from "@/components/Icons/CloseIcon";

import { useQuizFlow } from "@/utils/useQuizFlow";

import { useNavigate } from "@/router";

const QuizNav = () => {
  const navigate = useNavigate();
  const stack = useStack();
  let popCounts = stack.activities.length;

  const { pop } = useQuizFlow();

  const handleClick = () => {
    startTransition(() => {
      while (popCounts > 0) {
        pop({ animate: false });
        popCounts--;
      }
    });
    navigate("/home", { replace: true });
  };

  return (
    <nav className="flex h-10 w-full items-center justify-end px-4">
      <div onClick={handleClick}>
        <CloseIcon />
      </div>
    </nav>
  );
};

export default QuizNav;
