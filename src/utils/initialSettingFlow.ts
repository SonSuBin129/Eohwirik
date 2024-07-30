import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import NickNameActivity from "@/pages/initial-setting/_components/NickNameActivity";
import CategoryActivity from "@/pages/initial-setting/_components/CategoryActivity";
import CompleteActivity from "@/pages/initial-setting/_components/CompleteActivity";

import "@stackflow/plugin-basic-ui/index.css";

export const { Stack, activities } = stackflow({
  transitionDuration: 500,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    NickNameActivity,
    CategoryActivity,
    CompleteActivity,
  },
  initialActivity: () => "NickNameActivity",
});

export type TypeActivities = typeof activities;
