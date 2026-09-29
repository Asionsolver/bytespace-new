import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Courses } from "@/components/sections/courses";
import { Explore } from "@/components/sections/explore";
import { Growth } from "@/components/sections/growth";
import { CTA } from "@/components/sections/cta";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Courses />
        <Explore />
        <Growth />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
