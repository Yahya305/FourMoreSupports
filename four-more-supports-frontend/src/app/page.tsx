import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HomeBanner from "@/Components/HomeBanner";
import ImageCTASection from "@/Components/ImageCTASection";
import OurServices from "@/Components/OurServices";
import Testimonials from "@/Components/Testimonials";
import TopBar1 from "@/Components/TopBar1";
import TopBar2 from "@/Components/TopBar2";

export default function Home() {
    return (
        <main>
            <TopBar1 />
            <TopBar2 />
            <Header />
            <HomeBanner />
            <OurServices />
            <ImageCTASection />
            <Testimonials />
            <Footer />
        </main>
    );
}
