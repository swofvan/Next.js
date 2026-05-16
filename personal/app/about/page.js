// "use client";

// import Nav from "../components/navbar";
// import Footer from "../components/footer";
// import { FaUser, FaLaptopCode, FaGraduationCap } from "react-icons/fa";


// export default function About() {
//   return (
//     <>

//     <Nav />
    
//     <div className="bg-neutral-950 text-white min-h-screen">

//       {/* Hero Section */}
//       <section className="text-center py-16 px-6">
//         <h1 className="text-4xl font-bold text-purple-700">About Me</h1>
//         <p className="mt-4 max-w-2xl mx-auto text-gray-300">
//           I am a passionate Python Full Stack Developer trainee with knowledge in
//           Django, React, and modern web technologies. I love building responsive
//           and user-friendly web applications.
//         </p>
//       </section>

//       {/* Details Section */}
//       <section className="grid md:grid-cols-3 gap-8 px-6 pb-16">
        
//         {/* Personal Info */}
//         <div className="bg-neutral-900 p-6 rounded-lg shadow-lg">
//           <FaUser className="text-purple-700 text-3xl mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Personal Info</h2>
//           <p className="text-gray-300">
//             Python Full Stack Development Trainee at MashupStack, Kochi.  
//             Interested in backend development, APIs, and frontend design.
//           </p>
//         </div>

//         {/* Skills */}
//         <div className="bg-neutral-900 p-6 rounded-lg shadow-lg">
//           <FaLaptopCode className="text-purple-700 text-3xl mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Skills</h2>
//           <ul className="text-gray-300 space-y-1">
//             <li>Python & Django</li>
//             <li>React & Next.js</li>
//             <li>HTML, CSS, Bootstrap</li>
//             <li>MySQL Database</li>
//             <li>REST API Development</li>
//           </ul>
//         </div>

//         {/* Education / Training */}
//         <div className="bg-neutral-900 p-6 rounded-lg shadow-lg">
//           <FaGraduationCap className="text-purple-700 text-3xl mb-4" />
//           <h2 className="text-xl font-semibold mb-2">Training</h2>
//           <p className="text-gray-300">
//             Completed training in Python Full Stack Development at MashupStack,
//             focusing on both frontend and backend technologies with real-world practice.
//           </p>
//         </div>

//       </section>
//     </div>
    
//     <Footer />
    
//     </>
//   );
// }

"use client";

import Nav from "../components/navbar";
import Footer from "../components/footer";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTicketAlt, FaCar, FaTrophy } from "react-icons/fa";

const skills = {
  Frontend: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React", "Next.js"],
  Backend: ["Python", "Django", "Django REST Framework", "JWT"],
  Database: ["MySQL", "PostgreSQL"],
  Tools: ["GitHub", "Postman", "Figma", "Photoshop", "Illustrator"],
};

const projects = [
  {
    name: "TIXTRACK",
    tag: "Concert Ticket Booking Platform",
    icon: <FaTicketAlt />,
    tech: ["Python", "Django", "DRF", "React", "Redux", "Bootstrap", "MySQL",],
    desc: "I developed a full-stack Concert Booking Web App using Django and React. The backend uses Django REST Framework with DRF Token Authentication for secure login. I built REST APIs for frontend communication. The frontend uses React with Redux for state management, Axios for API calls, and Bootstrap for UI. The app allows users to browse events, book tickets, and manage pricing. MySQL is used for database management.",
    repo: "https://github.com/swofvan/Concert-Booking-Application"
  },
  {
    name: "RYDO",
    tag: "Ride-Hailing Platform",
    icon: <FaCar />,
    tech: ["Python", "Django", "DRF", "JWT", "React", "Redux", "Tailwind", "MySQL", "OpenStreetMap", "Leaflet"],
    desc: "I developed a Ride-Hailing Platform using Django and React. The backend uses Django REST Framework with JWT authentication for secure login. I implemented a custom User model with a One-to-One relation for driver management. The frontend is built with React, using Redux for state management and Axios for API calls, and styled with Tailwind CSS. I also integrated OpenStreetMap with Leaflet for map and location features.",
    repo: "https://github.com/swofvan/Ride-Hailing-project"
  },
];

const experience = [
  {
    role: "Python Full Stack Developer",
    type: "Training",
    company: "MashupStack",
    location: "Kochi, Kerala",
    points: [
      "Built full-stack projects with form validation, login control, and real-time data handling.",
      "Practiced Django backend and React frontend with MySQL databases.",
      "Developed responsive web pages using HTML, CSS, Bootstrap, and JavaScript.",
    ],
  },
  {
    role: "Graphic Designer",
    type: "Experience",
    company: "Hoztox Technologies",
    location: "Valanchery, Kerala",
    points: [
      "Designed social media creatives, banners, posters, and marketing materials for digital platforms.",
      "Created icons, UI elements, illustrations, and website mockups.",
      "Managed multiple design tasks and delivered quality work on deadline.",
    ],
  },
];

const languages = ["English", "Malayalam", "Tamil"]

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Nav />

      <div className="max-w-6xl mx-auto px-6">

        {/* ── HERO ── */}
        <section className="min-h-[90vh] flex flex-col justify-center py-20">

          <div data-aos="fade-up">
            <p className="text-purple-600 font-mono text-sm tracking-widest mb-4">
              ABOUT ME
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Mohammed
              <span className="text-purple-700"> Swofvan</span>
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl">
              Python Full-Stack Developer, Creative Graphic Designer </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <p className="mt-6 text-base text-gray-500 max-w-2xl leading-relaxed">
              I build responsive, user-friendly web applications using Django, React, and REST APIs.
              My experience as a Graphic Designer at Hoztox Technologies gives me a strong sense of
              visual design, attention to detail, and the ability to deliver clean, functional interfaces.
              I'm passionate about both frontend and backend development and always eager to grow
              through real-world projects.
            </p>
          </div>

          {/* Contact links */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/swofvan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-transparent border border-purple-700 hover:text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/swofvan/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-purple-700 text-white rounded-lg transition-colors duration-200"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:swofvanmhd@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-purple-700 text-white rounded-lg transition-colors duration-200"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="tel:+918594040472"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-purple-700 text-white rounded-lg transition-colors duration-200"
            >
              <FaPhone /> +91 85940 40472
            </a>
          </div>
        </section>

        <div className="border-t border-white/10" />

        {/* ── SKILLS ── */}
        <section className="py-20">
          <div data-aos="fade-up">
            <p className="text-purple-600 font-mono text-sm tracking-widest mb-2">
              WHAT I WORK WITH
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <div
                key={category}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="border border-white/10 hover:border-purple-700 rounded-xl p-5 transition-colors duration-200"
              >
                <p className="text-purple-600 font-mono text-xs tracking-widest uppercase mb-4">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/10" />

        {/* ── PROJECTS ── */}
        <section className="py-20">
          <div data-aos="fade-up">
            <p className="text-purple-600 font-mono text-sm tracking-widest mb-2">
              WHAT I'VE BUILT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Projects
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <div
                key={project.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="border border-white/10 hover:border-purple-700 rounded-xl p-7 transition-colors duration-200"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl text-purple-700 bg-white/5 border border-white/10 w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <p className="text-purple-600 font-mono text-xs tracking-widest mt-1">
                      {project.tag}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-purple-700 hover:text-purple-700 transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a  href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex float-right mt-5 items-center gap-2 w-fit px-4 py-2 border border-white/10 hover:border-purple-700 hover:text-purple-700 text-gray-400 text-sm rounded-lg transition-colors duration-200">
                    <FaGithub /> View on GitHub
                </a>

              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/10" />

        {/* ── EXPERIENCE ── */}
        <section className="py-20">
          <div data-aos="fade-up">
            <p className="text-purple-600 font-mono text-sm tracking-widest mb-2">
              WHERE I'VE BEEN
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Experience
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {experience.map((exp, i) => (
              <div
                key={exp.role}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="border border-white/10 hover:border-purple-700 rounded-xl p-7 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-600 font-mono text-xs tracking-widest mt-1">
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <span className="self-start px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                    >
                      <FaArrowRight className="text-purple-700 flex-shrink-0 mt-1 text-xs" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/10" />

        {/* ── CERTIFICATION ── */}
        <section className="py-20">
          <div data-aos="fade-up">
            <p className="text-purple-600 font-mono text-sm tracking-widest mb-2">
              ACHIEVEMENTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Certification
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="border border-white/10 hover:border-purple-700 rounded-xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-colors duration-200"
          >
            <div className="text-4xl flex-shrink-0 text-purple-700 bg-white/5 border border-white/10 w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0"><FaTrophy /></div>
            <div>
              <h3 className="text-white font-bold text-lg">
                MashupStack Certified - Full Stack Web Developer
              </h3>
              <p className="text-purple-600 font-mono text-xs tracking-widest mt-2">
                PYTHON DJANGO & REACT from MASHUPSTACK, KOCHI, KERALA
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-white/10" />

        {/* ── LANGUAGES ── */}
        <section className="py-20">
          <div data-aos="fade-up">
            <p className="text-purple-600 font-mono text-sm tracking-widest mb-2">
              COMMUNICATION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Languages
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {languages.map((lang,i) => (
              <span
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-purple-700 hover:text-purple-700 transition-colors duration-200"
              >
                {lang}
              </span>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}