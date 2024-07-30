import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import BackIcon from "@/components/BackIcon";
import LevelIcon from "@/components/Level";

interface NavProps {
  backLink?: string;
  NavTitle?: string;
}

const Nav = (props: NavProps) => {
  const { backLink, NavTitle } = props;

  return (
    <nav className="flex h-10 w-full items-center px-4">
      {backLink ? (
        <>
          <Link to={backLink} className="mr-auto">
            <BackIcon className="pl-[4.5px]" />
          </Link>
          {NavTitle && (
            <div className="flex-1 text-center text-xl font-bold leading-10">
              {NavTitle}
            </div>
          )}
        </>
      ) : (
        <>
          <Logo size="12%" className="mr-auto" />
          <LevelIcon />
        </>
      )}
    </nav>
  );
};

export default Nav;
