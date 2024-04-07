import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { ModalVarsActions } from "@/Redux/slices/ModalVars";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const navMenuItems = [
    "Careers",
    "Fee",
    "Innovaions",
    "Brochures",
    "Portal Login",
];

function NavSection1() {
    const dispatch = useAppDispatch();
    const navHeader = useAppSelector(
        (state) => state.ModalVars.NavHeaderModalStatus
    );
    const handleModalBtnClick=()=>{
        dispatch(
            ModalVarsActions.setNavHeaderModalStatus(
                !navHeader
            )
        )
    }
    return (
        <div className="nav-sec-1">
            <div className="nav-menus">
                {navMenuItems.map((item) => {
                    return <div className="nav-item">{item}</div>;
                })}
            </div>
            <div className="drop-icn" onClick={handleModalBtnClick}>
                <IoIosArrowDown size={20} />
            </div>
        </div>
    );
}

export default NavSection1;
