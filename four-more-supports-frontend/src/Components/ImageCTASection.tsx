import Image from "next/legacy/image";
import React from "react";

function ImageCTASection() {
    return (
        <div className="cta-sec">
            <div className="cta-sec-wrapper">
                <div className="image-sec">
                    <Image src="/GirlImage.png" alt="Logo" layout="fill" />
                </div>
                <div className="content-sec">
                    <h2>About Risha</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Felis vulputate
                        facilisis ut nulla ut mauris metus elementum. Maecenas
                        aliquam ultrices ultrices molestie id id. Nunc diam
                        ipsum eu a dictum semper fermentum.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Necessitatibus rerum aliquid consequuntur
                        laudantium deleniti dolore culpa quis expedita minima
                        vel qui perferendis doloribus, cum voluptatem hic maxime
                        omnis quae voluptas.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ImageCTASection;
