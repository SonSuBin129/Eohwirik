import { Link } from "react-router-dom";

import Logo from "@/components/Logo";
import LevelIcon from "@/components/Level";
import BackIcon from "@/components/Icons/BackIcon";

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
        <div className="flex w-full items-center px-2">
          <Logo size="22%" className="mr-auto" />
          <Link to="/level">
            <LevelIcon />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
