"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Internships() {

  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12"
      >
        My Internship
      </motion.h1>

      {/* Internship Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-xl mx-auto"
      >

        {/* Internship Image */}
        <div className="mb-5">
          <Image
            src="/internships/in3.png"
            alt="Internship Certificate"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Internship Title */}
        <h2 className="text-2xl font-semibold mb-3">
          Clay Analyst Internship
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-5">
          Completed an internship as a clay analyst under a saas retention advisor , we worked on a dataset of 655 comapnies and analyzed the data driven insights where we worked on a group for the retention research
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">

          <a
            href="/internships/in1.pdf"
            target="_blank"
            className="px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-500"
          >
            View offer letter
          </a>

          <a
            href="/internships/in2.pdf"
            target="_blank"
            className="px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-500"
          >
            View completion letter
          </a>

        </div>

      </motion.div>

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