import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);
    

  return (
    <footer className="bg-natural-950 text-gray-300 mt-12 border-t border-gray-700 pt-5 py-5">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8" data-aos="fade-up">

          {/* Left - About */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Mohammed Swofvan P</h2>
            <p className="mt-2 text-sm">
              Python FullStack Developer with React & Next.js
            </p>
          </div>

          {/* Center - Contact */}
          <div className="flex flex-col items-center">
            <div className="text-left">
                <p className="flex items-center gap-2">
                <FaEnvelope /> swofvanmhd@gmail.com
                </p>
                <p className="flex items-center gap-2 mt-2">
                <FaPhone /> +91 8594 040 472
                </p>
            </div>
            </div>

          {/* Right - Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/your-github-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/918594040472"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500" data-aos="fade-up">
          © 2026 Swofvan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}