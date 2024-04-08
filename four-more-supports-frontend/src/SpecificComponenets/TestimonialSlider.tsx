"use client";

import Image from "next/image";
import { PiQuotesFill } from "react-icons/pi";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { useCallback, useEffect, useRef, useState } from "react";

const TWEEN_FACTOR_BASE = 0.22;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

const SlideItem = ({ index }: { index: number }) => (
    <div className="testimonial-slide">
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
                <div className="user_name">Jhon Someone {index}</div>
            </div>
        </div>
    </div>
);

const TestimonialSlider = () => {
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
        },
        [
            Autoplay({
                delay: 3000,
            }),
            ClassNames({
                inView: "active",
            }),
        ]
    );

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector(
                ".testimonial-slide-wrapper"
            ) as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenScale = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === "scroll";

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex))
                        return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget =
                                        scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget =
                                        scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const tweenValue =
                        1 - Math.abs(diffToTarget * tweenFactor.current);
                    const scale = numberWithinRange(
                        tweenValue,
                        0,
                        1
                    ).toString();
                    const tweenNode = tweenNodes.current[slideIndex];
                    if (tweenNode?.style) {
                        tweenNode.style.transform = `scale(${scale})`;
                    }
                });
            });
        },
        []
    );

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenScale(emblaApi);

        emblaApi
            .on("reInit", setTweenNodes)
            .on("reInit", setTweenFactor)
            .on("reInit", tweenScale)
            .on("scroll", tweenScale);
        return () => {
            emblaApi
                .off("reInit", setTweenNodes)
                .off("reInit", setTweenFactor)
                .off("reInit", tweenScale)
                .off("scroll", tweenScale);
        };
    }, [emblaApi, tweenScale]);

    return (
        <div className="testimonial-slider" ref={emblaRef}>
            <div className="testimonial-slider-wrapper">
                <SlideItem index={1} />
                <SlideItem index={2} />
                <SlideItem index={3} />
                <SlideItem index={4} />
                <SlideItem index={5} />
            </div>
        </div>
    );
};

export default TestimonialSlider;
