import type { Metadata } from "next";
import "../Assets/custom.css";
import StoreProvider from "@/Redux/StoreProvider";
import ModalsInit from "@/Modals/ModalsInit";

export const metadata: Metadata = {
    title: "Four More Supports",
    description: `Lorem ipsum dolor sit amet consectetur. Felis vulputate facilisis ut nulla ut mauris metus elementum. Maecenas aliquam ultrices ultrices molestie id id. Nunc diam ipsum eu a dictum semper fermentum.`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang="en">
                <body>
                    <div className="__MAIN_SITE__">{children}</div>
                    <ModalsInit />
                </body>
            </html>
        </StoreProvider>
    );
}
