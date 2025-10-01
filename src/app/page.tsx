import { features, pricingPlans, testimonials } from "@/assets/data";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FooterSection from "@/components/home/FooterSection";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
    return (
        <div className="home-page bg-gradient-to-b from-gray-50 to-gray-100">
            {/* {Hero Section} */}
            <HeroSection />

            {/* {Features Section} */}
            <FeaturesSection features={features} />

            {/* {Pricing Section} */}
            <PricingSection pricingPlans={pricingPlans} />

            {/* {Testimonials Section} */}
            <TestimonialsSection testimonials={testimonials} />

            {/* {CTA Section} */}
            <CTASection />

            {/* {Footer Section} */}
            <FooterSection />
        </div>
    );
}
