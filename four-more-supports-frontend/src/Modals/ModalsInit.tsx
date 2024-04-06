"use client"

import { useAppSelector } from "@/Redux/Hooks";
import { AnimatePresence } from "framer-motion";
import MobileHeaderModal from "./MobileHeaderModal";

const ModalsInit = () => {
    const { mobileHeader } = useAppSelector((state) => state.GlobalVars);
    return (
        <div className="__Modals_Init__">
            <AnimatePresence>
                {mobileHeader && <MobileHeaderModal />}
            </AnimatePresence>
        </div>
    );
};

export default ModalsInit;
