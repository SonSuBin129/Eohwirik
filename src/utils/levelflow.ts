import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import "@stackflow/plugin-basic-ui/index.css";

import LevelActivity from "@/pages/level/_components/LevelActivity";
import ExplainActivity from "@/pages/level/_components/ExplainActivity";

export const { Stack, activities } = stackflow({
  transitionDuration: 500,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    LevelActivity,
    ExplainActivity,
  },
  initialActivity: () => "LevelActivity",
});

export type TypeActivities = typeof activities;
