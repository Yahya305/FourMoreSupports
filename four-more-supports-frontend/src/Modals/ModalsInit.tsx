"use client";

import { useAppSelector } from "@/Redux/Hooks";
import { AnimatePresence } from "framer-motion";
import MobileHeaderModal from "./MobileHeaderModal";

const ModalsInit = () => {
    const { MobileHeaderModalStatus } = useAppSelector(
        (state) => state.ModalVars
    );
    return (
        <div className="__Modals_Init__">
            <AnimatePresence>
                {MobileHeaderModalStatus && <MobileHeaderModal />}
            </AnimatePresence>
        </div>
    );
};

export default ModalsInit;
