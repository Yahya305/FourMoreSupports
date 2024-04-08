import GetLayout from "@/Lib/Utils/GetLayout";

const RootLayout = GetLayout(({ children }) => {
    return <div className="hidden-page">{children}</div>;
});

export default RootLayout;
