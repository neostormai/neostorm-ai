import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Portfolio from "@/components/Portfolio";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VideoSection />
      <Portfolio />
      <Philosophy />
      <Footer />
    </div>
  );
};

export default Index;
