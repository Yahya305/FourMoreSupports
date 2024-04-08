import GetLayout from "@/Lib/Utils/GetLayout";

const RootLayout = GetLayout(({ children }) => {
    return <div className="home-page">{children}</div>;
});

export default RootLayout;
