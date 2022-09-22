import { ReactNode } from "react";
import Header from "../Header";
import NavBar from "../NavBar";

export interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-black h-screen relative">
            <Header />
            {children}
            <NavBar />
        </div>
    )
}

export default Layout;
