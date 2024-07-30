import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import "@stackflow/plugin-basic-ui/index.css";

import FirstStepActivity from "@/pages/initial-setting/_components/FirstStepActivity";
import SecondStepActivity from "@/pages/initial-setting/_components/SecondStepActivity";
import CompleteActivity from "@/pages/initial-setting/_components/CompleteActivity";

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    FirstStepActivity,
    SecondStepActivity,
    CompleteActivity,
  },
  initialActivity: () => "FirstStepActivity",
});

export type TypeActivities = typeof activities;
