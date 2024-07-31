interface SubNavProps {
  NavTitle: string;
}
// 텍스트만 필요한 Nav일때 사용
const SubNav = (props: SubNavProps) => {
  const { NavTitle } = props;

  return (
    <nav className="flex h-10 w-full items-center justify-center px-4">
      <div className="text-center text-xl font-bold leading-10">{NavTitle}</div>
    </nav>
  );
};

export default SubNav;
