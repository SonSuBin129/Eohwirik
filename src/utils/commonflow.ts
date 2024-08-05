import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import "@stackflow/plugin-basic-ui/index.css";

import MainActivity from "@/pages/common/_components/MainActivity";
import ContentActivity from "@/pages/common/_components/ContentActivity";
import CompleteActivity from "@/pages/common/_components/CompleteActivity";

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
    ContentActivity,
    CompleteActivity,
  },
  initialActivity: () => "MainActivity",
});

export type TypeActivities = typeof activities;
