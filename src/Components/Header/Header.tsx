import { useLocation } from "react-router-dom";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {

    const { pathname } = useLocation();

    const NavTitle = () => {
        switch (pathname) {
            case "/discover":
                return "Discover";
            case "/spaces":
                return "Spaces";
            case "/consult":
                return "Consult";
            case "/myRoutine":
                return "My routines";
            default: 
                return "Michael";
        }
    }

  return (
    <nav className="bg-black fixed top-0 w-screen">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <span className="text-lg text-white">
                {pathname === "/" && <span className="text-lg text-gray-400">Hi, </span>}
                {NavTitle()}
            </span>
          </div>
            <button
              type="button"
              className="p-1 mr-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
              <div>
                <button
                  type="button"
                  className="flex bg-warmGrey rounded p-1 pl-2 pr-2 w-16 text-sm justify-between items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-white">250</span>
                </button>
              </div>
            </div>
      </div>    
    </nav>
  );
};

export default Header;
