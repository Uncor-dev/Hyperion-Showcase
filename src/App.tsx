import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";
import Home from "@/Pages/Home";
import Services from "@/Pages/Services";
import About from "@/Pages/About";
import Pricing from "@/Pages/Pricing";
import Community from "@/Pages/Community";
import Contact from "@/Pages/Contact";

function App() {
  return (
    <div className="flex h-screen flex-col overflow-auto bg-[#0E0E12] text-[#F2F2F5]">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
