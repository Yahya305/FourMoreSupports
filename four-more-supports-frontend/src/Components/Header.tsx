"use client";

import Logo from "@/Assets/Icons/Logo";
import { HeaderMenu } from "@/Lib/Data/HeaderMenu";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { ModalVarsActions } from "@/Redux/slices/ModalVars";
import HeaderMenuItem from "@/SpecificComponenets/HeaderMenuItem";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const dispatch = useAppDispatch();
    const mobileHeader = useAppSelector(
        (state) => state.ModalVars.MobileHeaderModalStatus
    );
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <Logo type="DARK" />
                </div>
                <nav>
                    <ul>
                        {HeaderMenu.map((Item) => (
                            <HeaderMenuItem Item={Item} key={Item.id} />
                        ))}
                    </ul>
                </nav>
                <button
                    onClick={() =>
                        dispatch(
                            ModalVarsActions.setMobileHeaderModalStatus(
                                !mobileHeader
                            )
                        )
                    }
                    className="ham"
                >
                    <RxHamburgerMenu />
                </button>
            </div>
        </header>
    );
};

export default Header;
