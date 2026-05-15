"use client";

import Link from "next/link";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


export default function Nav() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <nav className="bg-neutral-950 text-white border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Logo */}
            <h1 className="text-2xl font-bold text-purple-700 tracking-wide" data-aos="fade-right">
                Swofvan 
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-lg" data-aos="fade-left">
            <Link href="/" className="hover:text-purple-700 transition">
                Home
            </Link>
            <Link href="/about" className="hover:text-purple-700 transition">
                About
            </Link>
            <Link href="/projects" className="hover:text-purple-700 transition">
                Projects
            </Link>
            <Link href="/contact" className="hover:text-purple-700 transition">
                Contact
            </Link>
            </div>

        </div>
        </nav>
    );
}