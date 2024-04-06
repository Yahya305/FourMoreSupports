"use client";

import Logo from "@/Assets/Icons/Logo";
import { HeaderMenu } from "@/Lib/Data/HeaderMenu";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { GlobalVarsActions } from "@/Redux/slices/GlobalVars";
import HeaderMenuItem from "@/SpecificComponenets/HeaderMenuItem";

const Header = () => {
    const dispatch = useAppDispatch();
    const mobileHeader = useAppSelector(
        (state) => state.GlobalVars.mobileHeader
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
                            GlobalVarsActions.setMobileHeader(!mobileHeader)
                        )
                    }
                    className="ham"
                >
                    open
                </button>
            </div>
        </header>
    );
};

export default Header;
