import React from "react";
import SecondaryButton from "./SecondaryButton";

function HomeBanner() {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1>Four More Supports</h1>
                <p className="desc">
                    Specialising in NDIS Support Coordination, and Psychosocial
                    Recovery Coaching in Adelaide. Navigate Your NDIS Plan with
                    Confidence.
                </p>
                <SecondaryButton>Get in touch</SecondaryButton>
            </div>
        </div>
    );
}

export default HomeBanner;
