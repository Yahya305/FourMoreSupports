"use client";

import Image from "next/image";
import { PiQuotesFill } from "react-icons/pi";

import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";

const SlideItem = () => (
    <div
        className="
     testimonial-slide"
    >
        <div className="testimonial-slide-wrapper">
            <div className="icon">
                <PiQuotesFill />
            </div>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur. Felis vulputate
                facilisis ut nulla ut mauris metus elementum. Maecenas aliquam
                ultrices ultrices molestie id id. Nunc diam ipsum eu a dictum
                semper fermentum.
            </p>
            <div className="user">
                <Image
                    width={63}
                    height={63}
                    src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    alt="user__image"
                />
                <div className="user_name">Jhon Someone</div>
            </div>
        </div>
    </div>
);

const items = Array.from({ length: 5 }, (_, index) => (
    <SlideItem key={index} />
));
const TestimonialSlider = () => {
    return (
        <div className="testimonial-slider-wrapper">
            <AliceCarousel
                items={items}
                responsive={{
                    0: { items: 1 },
                    786: { items: 2 },
                    1024: { items: 3 },
                }}
                disableButtonsControls
                disableDotsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
                paddingLeft={10}
                paddingRight={10}
            />
        </div>
    );
};

export default TestimonialSlider;
