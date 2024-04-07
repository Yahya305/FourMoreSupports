"use client";

import Image from "next/image";
import { PiQuotesFill } from "react-icons/pi";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()); // Access API
        }
    }, [emblaApi]);

    return (
        <section className="Testimonials">
            <div className="Testimonials-wrapper">
                <div className="head">
                    <h2 className="title">What Our Client Says</h2>
                    <h3 className="sub-title">The People Have Spoken!</h3>
                </div>
                <div className="testimonial-wrapper">
                    <div className="embla testimonial-slider" ref={emblaRef}>
                        <div className="embla__container testimonial-slider-container">
                            <div className="embla__slide testimonial-slide">
                                <div className="testimonial-slide-wrapper">
                                    <div className="icon">
                                        <PiQuotesFill />
                                    </div>
                                    <p className="desc">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Felis vulputate facilisis ut nulla ut
                                        mauris metus elementum. Maecenas aliquam
                                        ultrices ultrices molestie id id. Nunc
                                        diam ipsum eu a dictum semper fermentum.
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
                            <div className="embla__slide testimonial-slide">
                                <div className="testimonial-slide-wrapper">
                                    <div className="icon">
                                        <PiQuotesFill />
                                    </div>
                                    <p className="desc">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Felis vulputate facilisis ut nulla ut
                                        mauris metus elementum. Maecenas aliquam
                                        ultrices ultrices molestie id id. Nunc
                                        diam ipsum eu a dictum semper fermentum.
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
                            <div className="embla__slide testimonial-slide">
                                <div className="testimonial-slide-wrapper">
                                    <div className="icon">
                                        <PiQuotesFill />
                                    </div>
                                    <p className="desc">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Felis vulputate facilisis ut nulla ut
                                        mauris metus elementum. Maecenas aliquam
                                        ultrices ultrices molestie id id. Nunc
                                        diam ipsum eu a dictum semper fermentum.
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
                            <div className="embla__slide testimonial-slide">
                                <div className="testimonial-slide-wrapper">
                                    <div className="icon">
                                        <PiQuotesFill />
                                    </div>
                                    <p className="desc">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Felis vulputate facilisis ut nulla ut
                                        mauris metus elementum. Maecenas aliquam
                                        ultrices ultrices molestie id id. Nunc
                                        diam ipsum eu a dictum semper fermentum.
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
