import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAED STUDIOS",
  description: "Creative Studio for Software, Design and Web Development",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <HomeBlogSection posts={posts} />
      <Features />
      {/* <About /> */}
      {/* <CallToAction /> */}
      {/* <Pricing /> */}
      <Testimonials />
      {/* <Faq /> */}
      {/* <Team /> */}
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
