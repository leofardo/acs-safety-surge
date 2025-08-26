import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import InstructorsSection from "@/components/InstructorsSection";
import FlyersSection from "@/components/FlyersSection";
import CertificatesSection from "@/components/CertificatesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <InstructorsSection/>
        <AboutUs />
        {/* <Courses /> */}
        <CoursesSection/>
        <WhyChooseUs />
        <FlyersSection/>
        <CertificatesSection/>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
