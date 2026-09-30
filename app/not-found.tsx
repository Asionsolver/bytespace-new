import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ErrorHero } from "@/components/sections/error-hero";

export const metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn’t exist.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <ErrorHero />
      </main>
      <Footer />
    </>
  );
}
