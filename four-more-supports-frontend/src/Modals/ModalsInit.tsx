"use client";

import { useAppSelector } from "@/Redux/Hooks";
import { AnimatePresence } from "framer-motion";
import MobileHeaderModal from "./MobileHeaderModal";
import { useEffect } from "react";

const ModalsInit = () => {
    const { MobileHeaderModalStatus,NavHeaderModalStatus } = useAppSelector(
        (state) => state.ModalVars
    );

    const ModalVars = useAppSelector((state) => state.ModalVars);

    useEffect(() => {
        const isAnyModalOpen = () => {
            for (const value of Object.values(ModalVars)) {
                if (value === true) {
                    return true;
                }
            }
            return false;
        };
    
        const handleOverflow = () => {
            const htmlElement = document.querySelector("html");
            if (htmlElement) {
                htmlElement.style.overflow = isAnyModalOpen() ? "hidden" : "";
            }
        };
    
        handleOverflow(); // Initial check
    
        return () => {
            const htmlElement = document.querySelector("html");
            if (htmlElement) {
                htmlElement.removeAttribute("style");
            }
        };
    }, [...Object.values(ModalVars)]);

    return (
        <div className="__Modals_Init__">
            <AnimatePresence>
                {MobileHeaderModalStatus && <MobileHeaderModal />}
            </AnimatePresence>
            <AnimatePresence>
                {NavHeaderModalStatus && <MobileHeaderModal />}
            </AnimatePresence>
        </div>
    );
};

export default ModalsInit;
