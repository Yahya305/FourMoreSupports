import { ReactNode } from "react";

type props = Readonly<{
    children: React.ReactNode;
}>;

const GetLayout = (Layout: (props: props) => ReactNode) => {
    return Layout;
};

export default GetLayout;
