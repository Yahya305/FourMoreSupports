import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HomeBanner from "@/Components/HomeBanner";
import ImageCTASection from "@/Components/ImageCTASection";
import OurServices from "@/Components/OurServices";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
    return (
        <main>
            <Header />
            <HomeBanner />
            <OurServices />
            <ImageCTASection />
            <Testimonials />
            <Footer />
        </main>
    );
}
