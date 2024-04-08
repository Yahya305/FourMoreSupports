import TestimonialSlider from "@/SpecificComponenets/TestimonialSlider";

const Testimonials = () => {
    return (
        <section className="Testimonials">
            <div className="Testimonials-wrapper">
                <div className="head">
                    <h2 className="title">What Our Client Says</h2>
                    <h3 className="sub-title">The People Have Spoken!</h3>
                </div>
                <TestimonialSlider />
            </div>
        </section>
    );
};

export default Testimonials;
