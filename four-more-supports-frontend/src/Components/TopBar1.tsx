"use client";

import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { ModalVarsActions } from "@/Redux/slices/ModalVars";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const navMenuItems = [
    "Careers",
    "Fee",
    "Innovaions",
    "Brochures",
    "Portal Login",
];

function TopBar1() {
    const dispatch = useAppDispatch();
    const navHeader = useAppSelector(
        (state) => state.ModalVars.NavHeaderModalStatus
    );
    const handleModalBtnClick = () => {
        dispatch(ModalVarsActions.setNavHeaderModalStatus(!navHeader));
    };
    return (
        <motion.div
            animate={{
                height: navHeader ? "100vh" : "auto",
            }}
            className="top-bar-1"
        >
            <div className="top-bar-1-wrapper">
                <div className="nav-menus">
                    {navMenuItems.map((item) => {
                        return (
                            <div key={item} className="nav-item">
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div className="head">
                    <div className="drop-icn" onClick={handleModalBtnClick}>
                        <IoIosArrowDown
                            className={navHeader ? "active" : ""}
                            size={20}
                        />
                    </div>
                </div>
                <AnimatePresence mode="popLayout">
                    {navHeader && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            className="body"
                        >
                            <div className="mob-nav-menus">
                                {navMenuItems.map((item) => {
                                    return (
                                        <div key={item} className="nav-item">
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default TopBar1;
