import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FaPhoneSquareAlt } from "react-icons/fa";

function NavSection2() {
    return (
        <div className="nav-sec-2">
            <div className="support-sec">
                <div className="phone-btn">
                    <FaPhoneSquareAlt size={25} />
                    +61 426393517
                </div>
                <PrimaryButton>Schedule Of Supports</PrimaryButton>
            </div>
        </div>
    );
}

export default NavSection2;
