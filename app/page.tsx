import Image from "next/image";
import {
  FaLaravel,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiPostgresql, SiFigma } from "react-icons/si";
import { MdApi, MdHealthAndSafety } from "react-icons/md";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm text-indigo-200">Hello</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">I’m Wiwit Farianto</h1>
            <p className="mt-3 text-xl text-indigo-100">Web Developer & IT Programmer</p>
            <p className="mt-6 max-w-xl text-indigo-100/90">
              Professional Web Developer and IT Programmer specializing in Hospital Information Systems (SIMRS), system integration, and enterprise web applications.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/mase.jpeg"
              alt="Wiwit Farianto"
              className="w-72 h-72 rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-20 bg-white text-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
          <p className="leading-relaxed text-lg">
            Bachelor’s degree in Informatics Engineering with professional experience as a Web Developer and IT Programmer, specializing in hospital information systems (SIMRS). Proven experience in developing, maintaining, and integrating web and mobile applications, including BPJS and SATUSEHAT integration.
          </p>
        </div>
      </section>

      {/* CORE SKILLS */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Core Skills</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "Laravel & PHP", icon: <FaLaravel /> },
              { label: "React JS & Next.js", icon: <FaReact /> },
              { label: "React Native", icon: <FaReact /> },
              { label: "JavaScript", icon: <SiJavascript /> },
              { label: "MySQL & PostgreSQL", icon: <FaDatabase /> },
              { label: "REST API", icon: <MdApi /> },
              { label: "SIMRS", icon: <MdHealthAndSafety /> },
              { label: "BPJS Integration", icon: <FaProjectDiagram /> },
              { label: "SATUSEHAT Integration", icon: <FaProjectDiagram /> },
              { label: "UI/UX (Figma)", icon: <SiFigma /> },
              { label: "Git", icon: <FaGitAlt /> },
              { label: "System Integration", icon: <FaProjectDiagram /> },
            ].map((skill) => (
              <div
                key={skill.label}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <div className="text-indigo-600 text-2xl">
                  {skill.icon}
                </div>
                <p className="font-medium text-slate-800">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
     <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Professional Experience</h2>

        <div className="space-y-8">
          {/* Adol Merchant */}
          <div className="border-l-4 border-indigo-600 pl-6">
            <h3 className="text-xl font-semibold">Mobile Developer</h3>
            <p className="text-black">Adol Merchant</p>
            <p className="text-sm text-slate-500">Jun 2020 – Sep 2020</p>
            <p className="mt-2 text-slate-700">
              Adol Merchant is a mobile-based application designed to help street vendors market their products digitally.
              Responsible for mobile application development using React Native, focusing on usability and performance.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Tech Stack: React Native
            </p>
          </div>

          {/* Positive Gym */}
          <div className="border-l-4 border-indigo-600 pl-6">
            <h3 className="text-xl font-semibold">Project Leader & Web Developer</h3>
            <p className="text-black">Positive Gym — positive-gym.com</p>
            <p className="text-sm text-slate-500">Dec 2021 – May 2023</p>
            <p className="mt-2 text-slate-700">
              Developed a gym management system with a web-based admin panel and a mobile application for users.
              Led development activities, system design, and implementation to support operational and membership management.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Tech Stack: Laravel, MySQL, React Native
            </p>
          </div>

          {/* Abad */}
          <div className="border-l-4 border-indigo-600 pl-6">
            <h3 className="text-xl font-semibold">Frontend Web Developer</h3>
            <p className="text-black">Abad — abad.id</p>
            <p className="text-sm text-slate-500">Apr 2022 – May 2023</p>
            <p className="mt-2 text-slate-700">
              Worked on a web-based news and blog portal, responsible for frontend development and UI implementation
              to ensure responsive and user-friendly content delivery.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Tech Stack: Laravel
            </p>
          </div>

          {/* Croya */}
          <div className="border-l-4 border-indigo-600 pl-6">
            <h3 className="text-xl font-semibold">Frontend Web Developer</h3>
            <p className="text-black">CROYA — croya.id</p>
            <p className="text-sm text-slate-500">Mar 2022 – Apr 2023</p>
            <p className="mt-2 text-slate-700">
              Developed a web-based broadcast and data management platform.
              Contributed to frontend development and system integration to support broadcast operations.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Tech Stack: React JS, Node JS, MySQL
            </p>
          </div>

          {/* Konect Hub */}
          <div className="border-l-4 border-indigo-600 pl-6">
            <h3 className="text-xl font-semibold">Frontend Web Developer</h3>
            <p className="text-black">Konect Hub — hub.konect.id</p>
            <p className="text-sm text-slate-500">Mar 2022 – Apr 2023</p>
            <p className="mt-2 text-slate-700">
              Developed a marketplace platform for event organizers, providing digital services and event management solutions.
              Focused on frontend implementation and integration with backend services.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Tech Stack: React JS, Node JS, MySQL
            </p>
          </div>

          {/* SIMRS */}
          <div className="border-l-4 border-indigo-600 pl-6">
            <h3 className="text-xl font-semibold">IT Programmer</h3>
            <p className="text-black">SIM RS Khusus Mata Purwokerto</p>
            <p className="text-sm text-slate-500">Aug 2023 – Present</p>
            <p className="mt-2 text-slate-700">
              Responsible for the development and maintenance of Hospital Information Systems (SIMRS),
              focusing on Electronic Medical Records (EMR/RME), system integration, and support for hospital operations.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Tech Stack: CodeIgniter, php native, postgresql, REST API, SIMRS Integration
            </p>
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}

