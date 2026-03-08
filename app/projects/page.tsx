"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Projects() {

  const router = useRouter();

  const projects = [
    {
      title: "Canteen food demand prediction",
      description:
        "An application that helps canteens tack food preparation and consumption data ,analyze wastage and predict future food demand to minimize food wastage",
      file: "/projects/mlpro.pdf"
    },
    {
      title: "SmartCart Application",
      description:
        "A Flutter-based smart shopping app that compares product prices and helps users shop efficiently.",
      file: "/projects/smartcart.pdf"
    },
    {
      title: "IoT Monitoring System",
      description:
        "An IoT-based system that monitors sensor data and sends real-time updates using connected devices.",
      file: "/projects/iot.pdf"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-10">

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >

            <h2 className="text-2xl font-semibold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <a
              href={project.file}
              target="_blank"
              className="inline-block px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-500"
            >
              View Project
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