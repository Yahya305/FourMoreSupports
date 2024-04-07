import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FaPhoneSquareAlt } from "react-icons/fa";

function TopBar2() {
    return (
        <div className="top-bar-2">
            <div className="top-bar-2-wrapper">
                <div className="support-sec">
                    <div className="phone-btn">
                        <FaPhoneSquareAlt size={25} />
                        +61 426393517
                    </div>
                    <PrimaryButton>Schedule Of Supports</PrimaryButton>
                </div>
            </div>
        </div>
    );
}

export default TopBar2;
