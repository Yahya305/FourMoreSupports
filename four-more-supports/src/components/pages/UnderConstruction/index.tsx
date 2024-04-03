import Image from "next/image";
import React from "react";

function index() {
    return (
        <div className="h-screen flex flex-col items-center sm:flex-row sm:items-center justify-center gap-5">
            {/* <div>12111</div>
          <div>423423</div> */}
            {/* <img
                src="/under_construction.png"
                alt=""
                // height={100}
                // width="auto"
            /> */}
            <div className="relative w-[50%] md:w-[40%]" style={{height:"600px"}} >
            <Image
                src="/under_construction.png"
                sizes="500px"
                fill
                style={{
                  objectFit: 'contain',
                }}        
                alt="constructio  image"
            />
            </div>
            <div className="w-[50%] md:w-[40%] flex flex-col justify-center items-center gap-10">
                <h1 className="text-secondary font-semibold rounded-md text-center text-lg border-8 border-primary p-5 md:text-3xl  md:p-10 ">
                    Website Under Construction
                </h1>
                <p className="font-semibold mx-5 max-sm:text-sm sm:text-sm md:text-base lg:text-lg lg:text-center text-justify">
                    <span className="text-primary">Welcome!</span> We're
                    thrilled to announce that something amazing is on the
                    horizon. Our website is currently under construction, but
                    we're working tirelessly to bring you an exceptional
                    experience.
                </p>
            </div>
        </div>
    );
}

export default index;
