import ScrollProgress from "@/components/ui/scroll-progress";
import Header from "@/components/layout/header";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import FeaturedProjects from "@/components/sections/featured-projects";
import { projects } from "@/lib/projects-data";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <FeaturedProjects items={projects} />
      </main>
      <Footer />
    </>
  );
}
