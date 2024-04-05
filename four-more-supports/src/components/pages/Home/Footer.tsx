import FacebookIconCircle from "@components/components/ui/FacebookIconCircle";
import InstaIconCircle from "@components/components/ui/InstaIconCircle";
import WhatsAppIconCircle from "@components/components/ui/WhatsAppIconCircle";
import Image from "next/image";
import React from "react";
import footerMenu1 from "../../../../lib/data/FooterMenu1";
import footerMenu2 from "../../../../lib/data/FooterMenu2";
import footerMenu3 from "../../../../lib/data/FooterMenu3";

function Footer() {
    return (
        <div className="bg-secondary text-white">
            <div className="flex justify-between mx-10 py-10">
                <div className="w-1/4">
                    <div className="relative h-16 w-24">
                        <Image
                            src="/logo2.png"
                            alt="Main image"
                            className="max-w-full aspect-[1.89] w-[126px]"
                            width={126}
                            height={67}
                        />
                    </div>
                    <div className="text-sm text-white/50">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure, maxime.
                    </div>
                    <div className="flex gap-3 my-2">
                        <InstaIconCircle />
                        <FacebookIconCircle />
                        <WhatsAppIconCircle />
                    </div>
                </div>
                <div className="w-2/5 flex justify-between">
                    <div className="w-1/3">
                        <div className="mb-3">Site Map</div>
                        {footerMenu1.map((menuItem) => {
                            return (
                                <div className="text-white/50 text-sm my-3">
                                    {menuItem}
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-1/3">
                        <div className="mb-3">Useful Links</div>
                        {footerMenu2.map((menuItem) => {
                            return (
                                <div className="text-white/50 text-sm my-3">
                                    {menuItem}
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-1/3">
                        <div className="mb-3">Contact Us</div>
                        {footerMenu3.map((menuItem) => {
                            return (
                                <>
                                    <div className="text-sm">{menuItem.subHeading}</div>
                                    <div className="text-white/50 text-sm my-3">
                                        {menuItem.content
                                            .split("\n")
                                            .map((line) => (
                                                <span key={line}>
                                                    {line}
                                                    <br />
                                                </span>
                                            ))}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className="w-1/4">end</div>
            </div>
            <div></div>
        </div>
    );
}

export default Footer;
