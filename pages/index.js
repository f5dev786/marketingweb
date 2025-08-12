import AppFeatures from "@/src/components/home/AppFeatures";
import BrandSlider from "@/src/components/home/BrandSlider";
import FAQSection from "@/src/components/home/FAQSection";
import IndustriesWeServe from "@/src/components/home/IndustriesWeServe";
import LocationAndSite from "@/src/components/home/LocationAndSite";
import MonitoringDashboard from "@/src/components/home/Monitoring";
import RotatingSection from "@/src/components/home/RotatingSection";
import WebDashboardImage from "@/src/components/home/WebDashboardImage";
import WhyChooseSection from "@/src/components/home/WhyChooseSection";
import WhyInovisenseSection from "@/src/components/home/WhyInovisenseSection";

export default function HomePage() {
  return (
    <>
      <div id="hero">
        <RotatingSection />
      </div>
      <div id="brands">
        <BrandSlider />
      </div>
      <div id="why-choose">
        <WhyChooseSection />
      </div>
      <div id="web-dashboard">
        <WebDashboardImage />
      </div>
      <div>
        <MonitoringDashboard />
      </div>
      <div
        id="why-inovisense"
        style={{
          fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
        }}
      >
        <WhyInovisenseSection />
      </div>
      <div
        id="installation"
        style={{
          fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
        }}
      >
        <LocationAndSite />
      </div>
      <div
        style={{
          fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
        }}
      >
        <AppFeatures />
      </div>
      <div
        id="solutions"
        style={{
          fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
        }}
      >
        <IndustriesWeServe />
      </div>
      <div
        id="faqs"
        style={{
          fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
        }}
      >
        <FAQSection />
      </div>
      {/* Add more sections here */}
    </>
  );
}
