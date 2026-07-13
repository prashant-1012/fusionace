import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import WhatWeDo from "@/components/WhatWeDo";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <WhatWeDo />
        <Founder />
      </main>
      <Footer />
    </>
  );
}
