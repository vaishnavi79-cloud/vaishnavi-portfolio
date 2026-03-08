"use client";

import { useRouter } from "next/navigation";

export default function Resume() {

  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-6">
        My Resume
      </h1>

      <p className="text-lg mb-8">
        You can view or download my resume below.
      </p>

      <div className="flex gap-6">

        <a
          href="/resume/VAISHNAVIRESUME-UPD2.pdf"
          target="_blank"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          View Resume
        </a>

        <a
          href="/resume/VAISHNAVIRESUME-UPD2.pdf"
          download
          className="px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          Download Resume
        </a>

      </div>

      <button
        onClick={() => router.push("/menu")}
        className="mt-10 px-6 py-2 bg-black text-white rounded-lg"
      >
        Back to Menu
      </button>

    </main>
  );
}