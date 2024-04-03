import React from "react";

function Header() {
    return (
        <div className="flex justify-center items-center px-2.5 bg-zinc-100 max-md:px-5">
            <div className="py-6 max-w-full w-[1620px] max-md:pr-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex justify-center items-center w-[15%] max-md:ml-0 max-md:w-full">
                        <h1 className="text-black">FMS</h1>
                    </div>
                    <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-3 justify-between items-center self-stretch pr-10 pl-2.5 my-auto text-lg text-teal-950 max-md:flex-wrap max-md:pr-5 max-md:mt-10">
                            <div className="self-stretch my-auto">Home</div>
                            <div className="flex gap-2.5 justify-center self-stretch p-2.5">
                                <div>NDIS Services</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8163821386e7d53d86887958ecb16eed6df59dad8cb0a8da91348cb0eccada7e?apiKey=fb1b07ce8320474484950edc03c5c0a0&"
                                    className="shrink-0 my-auto aspect-[1.37] fill-teal-950 w-[11px]"
                                />
                            </div>
                            <div className="self-stretch my-auto">
                                About FMS
                            </div>
                            <div className="self-stretch my-auto">NDIS</div>
                            <div className="self-stretch my-auto">Blog</div>
                            <div className="flex gap-2.5 justify-center self-stretch p-2.5">
                                <div>Contact Us</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8163821386e7d53d86887958ecb16eed6df59dad8cb0a8da91348cb0eccada7e?apiKey=fb1b07ce8320474484950edc03c5c0a0&"
                                    className="shrink-0 my-auto aspect-[1.37] fill-teal-950 w-[11px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
