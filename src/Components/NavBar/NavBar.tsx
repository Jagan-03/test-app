import { useLocation } from "react-router-dom";
import NavbarIcons from "./NavbarIcons";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {

    const { pathname } = useLocation();

  return (
    <nav className="bg-warmGrey absolute w-screen bottom-0">
      <div className="mx-auto max-w-2xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          {NavbarIcons.map((icon) => (
            <button className="flex-1" key={icon.id}>
              <a className="flex flex-col justify-center items-center" href={icon.linkUrl}>
                {icon.icon(pathname === icon.linkUrl ? "white" : "#A8A29E")}
                <span className={`text-xs ${pathname === icon.linkUrl ? "text-white" : "text-warmGrey400"}`}>{icon.linkTitle}</span>
              </a>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
