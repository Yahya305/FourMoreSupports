"use client";

import BackDrop from "@/Components/Backdrop";
import { ModalShowAnimation } from "@/Lib/Animation";
import { useAppDispatch } from "@/Redux/Hooks";
import { GlobalVarsActions } from "@/Redux/slices/GlobalVars";
import { motion } from "framer-motion";

const MobileHeaderModal = () => {
    const dispatch = useAppDispatch();
    return (
        <BackDrop>
            <motion.div {...ModalShowAnimation} className="MobileHeaderModal">
                <div className="head">
                    <div className="title"></div>
                    <button
                        onClick={() =>
                            dispatch(GlobalVarsActions.setMobileHeader(false))
                        }
                    >
                        close
                    </button>
                </div>
            </motion.div>
        </BackDrop>
    );
};

export default MobileHeaderModal;
