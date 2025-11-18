import Hero from "../components/Hero";
import About from "../components/About";
import Industries from "../components/Industries";
import Products from "../components/Products";
import BlogUpdates from "../components/BlogUpdates";
import VoiceAssistant from "../components/VoiceAssistant";
import { useState } from "react";

export default function Home() {

  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <>
      <Hero />
      <About />
      <Industries />
      <Products />
      <BlogUpdates />
    </>
  );
}