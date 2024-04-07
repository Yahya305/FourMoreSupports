import React from "react";
import Card from "./Card";

function OurServices() {
    return (
        <section className="ourservices-container">
            <div className="heading-text">
                <h1>Our Services</h1>
                <div>Its import for us to care of you</div>
            </div>
            <div className="cards">
                <Card
                    variant="secondary"
                    imgSrc="/Card1Logo.png"
                    buttonContent="Learn More"
                    headingContent="Support Coordination"
                    descContent="Discover how our tailored Support Coordination can guide you through your NDIS journey, ensuring you leverage the full potential of your plan for a better, more empowered life in Adelaide."
                />
                <Card
                    variant="primary"
                    imgSrc="/Card1Logo.png"
                    buttonContent="Learn More"
                    headingContent="Specialist Support Coordination"
                    descContent="Elevate your NDIS journey with Four More Supports’ Specialist Support Coordination in Adelaide. Tailored, expert solutions for complex needs."
                />
                <Card
                    variant="secondary"
                    imgSrc="/Card1Logo.png"
                    buttonContent="Learn More"
                    headingContent="Psychosocial Recovery Coaching"
                    descContent="Achieve mental health resilience and recovery with Four More Supports’ Psychosocial Recovery Coaching in Adelaide. Expert guidance every step of the way."
                />
            </div>
            <div className="background-lines"></div>
        </section>
    );
}

export default OurServices;
