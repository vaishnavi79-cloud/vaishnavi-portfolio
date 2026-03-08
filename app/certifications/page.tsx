"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Certifications() {

  const router = useRouter();

  const certificates = [
    { title: "We Hub First Cohort(2025)", org: "We Hub", file: "/certifications/wehub.pdf" },
    { title: "JOY of computing using python", org: "NPTEL", file: "/certifications/nptel.pdf" },
    { title: "fundamentals of generative AI", org: "GUVI", file: "/certifications/sawit.jpeg" },
    { title: "Introduction to iot and digital transformation", org: "Cisco Networking Academy", file: "/certifications/iotin.pdf" },
    { title: "CCNA: introduction to networks", org: "Cisco Networking Academy", file: "/certifications/ccna.pdf" },
    { title: "Canva Education", org: "Canva", file: "/certifications/canva.png" },
    { title: "javascript language ", org: "linkedin learning", file: "/certifications/javascript.pdf" },
    { title: "innovate and invest 2025 ", org: "Awakening the golden bird", file: "/certifications/ecer.pdf" },
    
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12"
      >
        My Certifications
      </motion.h1>

      {/* Certificate Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {certificates.map((cert, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >

            <h2 className="text-xl font-semibold mb-2">
              {cert.title}
            </h2>

            <p className="text-gray-400 mb-4">
              {cert.org}
            </p>

            <a
              href={cert.file}
              target="_blank"
              className="inline-block px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-500"
            >
              View Certificate
            </a>

          </motion.div>

        ))}

      </div>

      {/* Back Button */}
      <div className="text-center mt-14">

        <button
          onClick={() => router.push("/menu")}
          className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
        >
          Back to Menu
        </button>

      </div>

    </main>
  );
}