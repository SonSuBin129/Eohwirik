import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import BackIcon from "@/components/BackIcon";
import { cn } from "@ui/lib/utils";
import LevelIcon from "@/components/Level";

interface NavProps {
  //backLink를 보내주면, icon은 backIcon 쓰면 되고,
  //안 보내주면 기존 아이콘
  backLink?: string;
  NavTitle?: string;
}

const Nav = (props: NavProps) => {
  const { backLink, NavTitle } = props;

  return (
    <nav
      className={cn(
        "flex h-10 w-full self-stretch px-4",
        !backLink ? "justify-between" : "justify-start",
      )}
    >
      {!backLink ? (
        <>
          <Logo size="12%" className="justify-start" />
          <LevelIcon />
        </>
      ) : (
        <>
          <div className="flex items-center">
            <Link to={backLink}>
              <BackIcon />
            </Link>
          </div>
          <div className="grow text-center text-2xl font-bold leading-10">
            {NavTitle}
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
