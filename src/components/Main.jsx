import React from "react";
import { Link } from "react-router-dom";

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

const Main = () => {
  const memoryDatas = [
    { id: 1, image: "14.jpg" },
    { id: 2, image: "15.jpg" },
    { id: 3, image: "16.jpg" },
    { id: 4, image: "17.jpg" },
    { id: 5, image: "18.jpg" },
    { id: 6, image: "19.jpg" },
    { id: 7, image: "20.jpg" },
    { id: 8, image: "21.jpg" },
    { id: 9, image: "22.jpg" },
  ];

  const captions = [
    "The moment my heart whispered, ‘this is home.’ 💖",
    "Your smile turns ordinary days into magic. ✨",
    "I still feel the warmth of this memory. 🌸",
    "With you, every corner becomes beautiful. 🌷",
    "If joy had a picture, it would be this. 📸",
    "Holding this moment forever in my heart. 💞",
    "Your laugh is my favorite melody. 🎶",
    "Little moments that mean everything. 💌",
    "Us, exactly where we’re meant to be. ⭐",
  ];

  return (
    <main className="w-screen h-screen overflow-y-scroll bg-pink-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-2">
          📖 Our Memories Together 💞
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Scroll to relive the moments that made us, us. 💗
        </p>

        {memoryDatas.map((item, idx) => (
          <section
            key={item.id}
            className="bg-white p-4 rounded-2xl shadow-md border border-pink-200"
          >
            <h2 className="text-xl font-semibold text-pink-500 mb-3">
              💗 Memory #{idx + 1}
            </h2>

            <img
              src={asset(item.image)}
              alt={`Memory ${idx + 1}`}
              className="w-full rounded-lg shadow-md border-4 border-white object-contain"
            />

            <p className="mt-3 text-gray-700 italic">{captions[idx]}</p>
          </section>
        ))}

        <div className="text-center mt-6">
          <Link
            to="/video"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-pink-600 transition"
          >
            🎥 Watch Video Memories
          </Link>
        </div>

        <div className="h-10" />
      </div>
    </main>
  );
};

export default Main;
