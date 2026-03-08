"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Menu() {

  const router = useRouter();

  const menuItems = [
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "internships", path: "/internships" },
    { name: "Certifications", path: "/certifications" },
    { name: "about", path: "/about" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">

      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12"
      >
        My Portfolio
      </motion.h1>

      {/* Menu Buttons */}
      <div className="flex flex-col gap-6">

        {menuItems.map((item, index) => (

          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => router.push(item.path)}
            className="px-10 py-4 bg-purple-600 rounded-xl text-lg font-semibold shadow-lg hover:bg-purple-500"
          >
            {item.name}
          </motion.button>

        ))}

      </div>

    </main>
  );
}
