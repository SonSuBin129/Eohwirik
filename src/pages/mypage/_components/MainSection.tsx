import UserProfileSection from "./UserProfileSection";
import ServiceExplainSection from "./ServiceExplainSection";
import EtcSection from "./EtcSection";
import AccountSettingSection from "./AccountSettingSection";

const MainSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-8 py-5">
      <UserProfileSection />
      <section className="flex w-full flex-col gap-[26px]">
        <AccountSettingSection />
        <ServiceExplainSection />
        <EtcSection />
      </section>
    </section>
  );
};

export default MainSection;
