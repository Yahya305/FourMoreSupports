"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { PiQuotesFill } from "react-icons/pi";
import Slider from "react-slick";

const Testimonials = () => {
    return (
        <section className="Testimonials">
            <div className="Testimonials-wrapper">
                <div className="head">
                    <h2 className="title">What Our Client Says</h2>
                    <h3 className="sub-title">The People Have Spoken!</h3>
                </div>
                <Slider
                    className="testimonial-slider"
                    arrows={false}
                    dots={false}
                    centerPadding="99px"
                    centerMode={true}
                    slidesToShow={3}
                >
                    <div className="testimonial-slide">
                        <div className="testimonial-slide-wrapper">
                            <div className="icon">
                                <PiQuotesFill size={45} />
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur. Felis
                                vulputate facilisis ut nulla ut mauris metus
                                elementum. Maecenas aliquam ultrices ultrices
                                molestie id id. Nunc diam ipsum eu a dictum
                                semper fermentum.
                            </p>
                            <div className="user">
                                <Image
                                    width={63}
                                    height={63}
                                    src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?ct=jpeg"
                                    alt="user__image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slide">
                        <div className="testimonial-slide-wrapper">
                            <div className="icon">
                                <PiQuotesFill size={45} />
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur. Felis
                                vulputate facilisis ut nulla ut mauris metus
                                elementum. Maecenas aliquam ultrices ultrices
                                molestie id id. Nunc diam ipsum eu a dictum
                                semper fermentum.
                            </p>
                            <div className="user">
                                <Image
                                    width={63}
                                    height={63}
                                    src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?ct=jpeg"
                                    alt="user__image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slide">
                        <div className="testimonial-slide-wrapper">
                            <div className="icon">
                                <PiQuotesFill size={45} />
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur. Felis
                                vulputate facilisis ut nulla ut mauris metus
                                elementum. Maecenas aliquam ultrices ultrices
                                molestie id id. Nunc diam ipsum eu a dictum
                                semper fermentum.
                            </p>
                            <div className="user">
                                <Image
                                    width={63}
                                    height={63}
                                    src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?ct=jpeg"
                                    alt="user__image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slide">
                        <div className="testimonial-slide-wrapper">
                            <div className="icon">
                                <PiQuotesFill size={45} />
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur. Felis
                                vulputate facilisis ut nulla ut mauris metus
                                elementum. Maecenas aliquam ultrices ultrices
                                molestie id id. Nunc diam ipsum eu a dictum
                                semper fermentum.
                            </p>
                            <div className="user">
                                <Image
                                    width={63}
                                    height={63}
                                    src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?ct=jpeg"
                                    alt="user__image"
                                />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
