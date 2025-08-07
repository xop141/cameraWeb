import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Dashboard from "@/components/sections/Dashboard";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-slate-950">
      <div className="snap-start h-screen">
        <Hero />
      </div>
      <div className="snap-start h-screen">
        <Features />
      </div>
      <div className="snap-start h-screen">
        <Dashboard />
      </div>
      <div className="snap-start h-screen">
        <About />
      </div>
      <div className="snap-start h-screen">
        <Contact />
      </div>
    </div>
  );
}
