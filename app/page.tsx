import BackgroundGlow from "@/components/BackgroundGlow";
import BookingSection from "@/components/BookingSection";
import ClientsSection from "@/components/ClientsSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NoWebsiteSection from "@/components/NoWebsiteSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import StickyBookingButton from "@/components/StickyBookingButton";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[radial-gradient(ellipse_at_top,_#10182f_0%,_#04050b_45%)]">
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <NoWebsiteSection />
        <ServicesSection />
        <PortfolioSection />
        <ClientsSection />
        <TestimonialsSection />
        <BookingSection />
      </div>
      <StickyBookingButton />
    </main>
  );
}
