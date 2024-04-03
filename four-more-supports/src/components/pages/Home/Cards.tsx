import React from "react";

function Cards() {
    return (
        <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center max-md:mt-10">
                        <div className="flex flex-col justify-center px-12 py-14 rounded-xl shadow-sm bg-teal-950 max-md:px-5">
                            <div className="flex flex-col items-center px-2">
                                <div className="flex justify-center items-center px-8 bg-yellow-500 rounded-full h-[158px] w-[158px] max-md:px-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/29d255c12f360c004d474b530ed8350e20498ff59c2778c80484cf6b3078ac85?apiKey=fb1b07ce8320474484950edc03c5c0a0&"
                                        className="w-full aspect-[1.11]"
                                    />
                                </div>
                                <div className="mt-5 text-3xl font-semibold text-center text-white capitalize">
                                    Support Coordination
                                </div>
                                <div className="self-stretch mt-4 text-lg text-center text-white capitalize">
                                    Discover how our tailored Support
                                    Coordination can guide you through your NDIS
                                    journey, ensuring you leverage the full
                                    potential of your plan for a better, more
                                    empowered life in Adelaide.
                                </div>
                                <div className="justify-center px-8 py-5 mt-7 text-lg font-semibold bg-yellow-500 rounded-md text-teal-950 max-md:px-5">
                                    Learn More
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center max-md:mt-10">
                        <div className="flex flex-col justify-center px-11 py-14 bg-white rounded-xl shadow-sm max-md:px-5">
                            <div className="flex flex-col items-center px-3">
                                <div className="flex justify-center items-center px-9 bg-yellow-500 rounded-full h-[159px] w-[159px] max-md:px-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d78b6159b5a5cace78f9a11e0633b51ad4dcfa984bf08a2bd0f480bfd036ad6?apiKey=fb1b07ce8320474484950edc03c5c0a0&"
                                        className="w-full aspect-[1.01]"
                                    />
                                </div>
                                <div className="mt-5 text-3xl font-semibold text-center text-black capitalize">
                                    Specialist Support Coordination
                                </div>
                                <div className="self-stretch mt-5 text-lg text-center capitalize text-teal-950 text-opacity-50">
                                    Elevate your NDIS journey with Four More
                                    Supports’ Specialist Support Coordination in
                                    Adelaide. Tailored, expert solutions for
                                    complex needs.
                                </div>
                                <div className="justify-center px-8 py-5 mt-8 text-lg font-semibold text-white rounded-md bg-teal-950 max-md:px-5">
                                    Learn More
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center max-md:mt-10">
                        <div className="flex flex-col p-14 bg-white rounded-xl shadow-sm max-md:px-5">
                            <div className="flex justify-center items-center self-center px-11 bg-yellow-500 rounded-full h-[158px] w-[158px] max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d0e5ccc4cacab68cf4d3d4f093f6f633113096a981cd3b5b481a077ec16b657?apiKey=fb1b07ce8320474484950edc03c5c0a0&"
                                    className="w-full aspect-[0.85]"
                                />
                            </div>
                            <div className="mt-5 text-3xl font-semibold text-center text-black capitalize">
                                Psychosocial Recovery Coaching
                            </div>
                            <div className="mt-5 text-lg text-center capitalize text-teal-950 text-opacity-50">
                                Achieve mental health resilience and recovery
                                with Four More Supports’ Psychosocial Recovery
                                Coaching in Adelaide. Expert guidance every step
                                of the way.
                            </div>
                            <div className="justify-center self-center px-8 py-5 mt-7 text-lg font-semibold text-white rounded-md bg-teal-950 max-md:px-5">
                                Learn More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
