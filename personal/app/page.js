"use client";

import Nav from "./components/navbar";
import Footer from "./components/footer";

import { useEffect } from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import { FaRegStar, FaArrowRight } from "react-icons/fa";

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skills = [
    { name: "Python", star: true },
    { name: "Django", star: true },
    { name: "React", star: false },
    { name: "Next.js", star: false },
    { name: "JavaScript", star: false },
    { name: "HTML & CSS", star: false },
    { name: "Bootstrap", star: false },
    { name: "Tailwind CSS", star: false },
    { name: "REST APIs", star: false },
    { name: "MySQL", star: false },
    { name: "PostgreSQL", star: false },
    { name: "GitHub", star: false },
  ];

  return (
    <>
      <Nav />

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center py-20">
          <div data-aos="fade-up">
            <p className="text-purple-600 font-mono text-sm tracking-widest mb-4">
              Hello, I am
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Mohammed
              <br />
              <span className="text-purple-700">Swofvan P</span>
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl">
              Python Full-Stack Developer - building responsive web apps with{" "}
              <span className="text-white">Django</span>,{" "}
              <span className="text-white">React</span>,{" "}
              <span className="text-white">Next.js</span>.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-transparent border border-purple-700 hover:text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View Projects <span><FaArrowRight /></span> 
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 hover:border-purple-700 text-white rounded-lg transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>
        </section>

        <div className="border-t border-white/10" />

        {/* Skills Section */}
        <section className="py-20">
          <p className="text-purple-600 font-mono text-sm tracking-widest mb-2">
            WHAT I WORK WITH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Tech Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-purple-700 hover:text-purple-700 transition-colors duration-200"
              >
                {skill.name}

                {skill.star && (
                  <FaRegStar className="text-bg-white text-xs hover:text-purple-700 transition-colors duration-200" />
                )}
              </span>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}