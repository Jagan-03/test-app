import { ReactNode } from "react";
import Layout from "../PageLayout";

export interface RouterWrapperProps {
    children: ReactNode;
}

const RouterWrapper: React.FC<RouterWrapperProps> = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default RouterWrapper;
