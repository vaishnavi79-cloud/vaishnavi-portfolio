"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function About() {

  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col items-center justify-center p-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-10"
      >
        Personal Information
      </motion.h1>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-lg w-full"
      >

        <p className="text-lg mb-4">
          <span className="font-semibold">Name:</span> Manda Vaishnavi
        </p>

        <p className="text-lg mb-4">
          <span className="font-semibold">Email:</span> vaishnavimanda908@gmail.com
        </p>

        <p className="text-lg mb-4">
          <span className="font-semibold">Date of Birth:</span> 3 April 2006
        </p>

        <p className="text-lg mb-4">
          <span className="font-semibold">Hobbies:</span> Crocheting, Travelling
        </p>

      </motion.div>

      {/* Back Button */}
      <button
        onClick={() => router.push("/menu")}
        className="mt-10 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
      >
        Back to Menu
      </button>

    </main>
  );
}