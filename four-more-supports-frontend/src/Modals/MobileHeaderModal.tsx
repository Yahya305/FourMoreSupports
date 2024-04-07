"use client";

import Logo from "@/Assets/Icons/Logo";
import { AnimationType } from "@/Lib/Animation";
import { useAppDispatch } from "@/Redux/Hooks";
import { ModalVarsActions } from "@/Redux/slices/ModalVars";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const MobileHeaderModal = () => {
    const dispatch = useAppDispatch();
    return (
        <motion.div {...MobileModalShowAnimation} className="MobileHeaderModal">
            <div className="head">
                <div className="logo">
                    <Logo type="DARK" />
                </div>
                <button
                    onClick={() =>
                        dispatch(
                            ModalVarsActions.setMobileHeaderModalStatus(false)
                        )
                    }
                >
                    <MdClose />
                </button>
            </div>
        </motion.div>
    );
};

const MobileModalShowAnimation: AnimationType = {
    variants: {
        hidden: { left: "100%", opacity: 0 },
        show: { left: 0, opacity: 1 },
    },
    initial: "hidden",
    animate: "show",
    exit: "hidden",
    transition: {
        type: "tween",
        duration: 0.5,
    },
};

export default MobileHeaderModal;
