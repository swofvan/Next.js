"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import AOS from "aos";
import "aos/dist/aos.css";


export default function Nav() {

    const pathname = usePathname();

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
                <Link
                    href="/"
                    className={`transition hover:text-purple-700 ${
                    pathname === "/" ? "text-purple-700 font-semibold" : ""}`}>
                    Home
                </Link>
                <Link
                    href="/about"
                    className={`transition hover:text-purple-700 ${
                    pathname === "/about" ? "text-purple-700 font-semibold" : ""}`}>
                    About
                </Link>
                
                <Link 
                    href="/contact"
                    className={`transition hover:text-purple-700 ${
                    pathname === "/contact" ? "text-purple-700 font-semibold" : ""
                    }`}>
                    Contact
                </Link>
            </div>

        </div>
        </nav>
    );
}