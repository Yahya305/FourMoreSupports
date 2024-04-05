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
        <div className="relative bg-secondary text-white py-10">
            <div className="flex justify-between mx-10">
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
                                    <div className="text-sm">
                                        {menuItem.subHeading}
                                    </div>
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
                <div className="w-1/4 flex flex-col items-center gap-2">
                    <div className="font-semibold text-2xl text-primary">
                        Join Our Mailing List
                    </div>
                    <form className="flex flex-col justify-around w-[80%]">
                        <input type="text" className="my-1.5 p-2 rounded-sm bg-white/10 text-white" placeholder="Full Name" />
                        <input type="text" className="my-1.5 p-2 rounded-sm bg-white/10 text-white" placeholder="Phone Number" />
                        <input type="text" className="my-1.5 p-2 rounded-sm bg-white/10 text-white" placeholder="Email Address" />
                        <div className="flex justify-start">
                            <button
                                type="submit"
                                className="bg-primary p-2 rounded-md text-secondary my-1 font-semibold"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
            <div className="flex my-8 mx-10">
                <div className="w-1/2 text-sm text-white/50">ABN 15 101 252 171</div>
                <div className="w-1/2 text-sm border border-1 p-3 rounded-sm text-white/50 border-white/50">Lorem ipsum dolor sit amet consectetur. Felis vulputate facilisis ut nulla ut mauris metus elementum</div>
            </div>
            <div className="absolute w-[100%] p-3 bg-primary bottom-0 text-center text-secondary text-xs">
                Copyright 2024. FMS PTY LTD. | Disclaimer | Privacy policy | Terms & Conditions
            </div>
        </div>
    );
}

export default Footer;
