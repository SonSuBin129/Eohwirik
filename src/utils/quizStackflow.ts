import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import "@stackflow/plugin-basic-ui/index.css";

import VocaActivity from "@/pages/quiz/_components/VocaActivity";
import QuizAnswerActivity from "@/pages/quiz/_components/QuizAnswerActivity";
import QuizActivity from "@/pages/quiz/_components/QuizActivity";
import MainActivity from "@/pages/quiz/_components/MainActivity";
import LevelUpActivity from "@/pages/quiz/_components/LevelUpActivity";
import CompleteActivity from "@/pages/quiz/_components/CompleteActivity";

export const { Stack, activities } = stackflow({
  transitionDuration: 500,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    MainActivity,
    QuizActivity,
    QuizAnswerActivity,
    CompleteActivity,
    VocaActivity,
    LevelUpActivity,
  },
  initialActivity: () => "MainActivity",
});

export type TypeActivities = typeof activities;
