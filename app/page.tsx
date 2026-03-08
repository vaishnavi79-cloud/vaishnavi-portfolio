"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import codingAnimation from "../annimations/cartoon.json";

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white">

      {/* Cute Animation */}
      <div className="w-72 mb-6">
        <Lottie animationData={codingAnimation} loop={true} />
      </div>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center"
      >
        Hi, I'm Vaishnavi 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl mt-4"
      >
        Welcome to My Portfolio
      </motion.p>

      {/* Start Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 px-8 py-3 bg-white text-black font-semibold rounded-xl"
        onClick={() => router.push("/menu")}
      >
        Start Exploring
      </motion.button>

    </main>
  );
}