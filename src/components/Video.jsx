import React from "react";
import { Link } from "react-router-dom";

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

const Video = () => {
  const videos = ["v1.MP4", "v2.MP4", "v3.MOV", "v4.MOV", "v5.MOV", "v6.MP4", "v7.MOV"];

  const videoCaptions = [
    "Every laugh, every second with you is a treasure. 🎞️💗",
    "This moment still plays in my heart like a song. 🎶💖",
    "No camera could capture how happy I was here. ✨",
    "A memory that still makes me smile every time. 😊",
    "How happy to see you enjoy with this Tiramisu Bby 🌷",
    "A beautiful moment I never want to forget. 💞",
    "Love doesn’t need words, just moments like these. ❤️",
  ];

  return (
    <main className="w-screen min-h-screen bg-pink-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        🎥 Video Memories Together 💞
      </h1>

      <div className="space-y-8 max-w-4xl w-full">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-md border border-pink-200"
          >
            <h2 className="text-xl font-semibold text-pink-500 mb-3">
              🎬 Video Memory #{index + 1}
            </h2>

            <video
              src={asset(video)}
              className="w-full rounded-lg shadow-md border-4 border-white"
              controls
              playsInline
            />

            <p className="mt-3 text-gray-700 italic text-center">
              {videoCaptions[index]}
            </p>
          </div>
        ))}

        <div className="text-center mt-6">
          <Link
            to="/message"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-pink-600 transition"
          >
            Message to My Beautiful Girl
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Video;
