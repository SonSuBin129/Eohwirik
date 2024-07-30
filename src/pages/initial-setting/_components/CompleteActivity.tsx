import BackIcon from "@/components/BackIcon";
import { Activity, ActivityContent, ActivityFooter } from "./Activity";
import NextStepButton from "@/pages/initial-setting/_components/NextStepButton";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

const CompleteActivity: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={{
        border: false,
        height: "56px",
        backButton: {
          renderIcon: () => <BackIcon />,
          ariaLabel: "Go Back",
        },
      }}
    >
      <Activity>
        <ActivityContent>
          <section className="grow">
            <div>지금은 complete</div>
          </section>
          <ActivityFooter>
            <NextStepButton
              activityName={"MainActivity" as never}
              disabled={false}
            ></NextStepButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;
