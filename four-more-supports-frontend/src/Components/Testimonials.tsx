import dynamic from "next/dynamic";

const NoSSRTestimonialSlider = dynamic(
    () => import("@/SpecificComponenets/TestimonialSlider"),
    { ssr: false }
);

const Testimonials = () => {
    return (
        <section className="Testimonials">
            <div className="Testimonials-wrapper">
                <div className="head">
                    <h2 className="title">What Our Client Says</h2>
                    <h3 className="sub-title">The People Have Spoken!</h3>
                </div>
                <NoSSRTestimonialSlider />
            </div>
        </section>
    );
};

export default Testimonials;
