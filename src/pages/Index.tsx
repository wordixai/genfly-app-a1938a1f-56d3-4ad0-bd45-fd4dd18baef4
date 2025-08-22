import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReorganizeSection from "@/components/ReorganizeSection";
import UIDetailsSection from "@/components/UIDetailsSection";
import AssetsSection from "@/components/AssetsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />
      <main className="flex flex-col items-center">
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <ReorganizeSection />
        <UIDetailsSection />
        <AssetsSection />
        <TestimonialsSection />
        <FAQSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;