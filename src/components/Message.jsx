import React, { useState } from "react";
import { GiGiftOfKnowledge, GiLoveLetter } from "react-icons/gi";
import { Link } from "react-router-dom";

const Message = () => {
  const [open, setOpen] = useState(false);

  const loveMessage = `
My dearest love,
Every moment with you feels like the most beautiful chapter of my life.
Thank you for filling my days with laughter, warmth, and a kind of happiness
I never knew existed until you came into my world.

No matter where life takes us, know that my heart will always choose you.
Always, and in all ways. 💖
`;

  return (
    <main className="w-screen h-screen bg-pink-100 flex flex-col justify-center items-center">
      {!open ? (
        // Closed box view
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col items-center bg-pink-300 p-6 rounded-2xl shadow-lg hover:bg-pink-400 transition"
        >
          <GiGiftOfKnowledge size={90} className="text-pink-700 animate-bounce" />
          <p className="mt-3 text-lg font-semibold text-pink-800">
            Click to open your special message 💌
          </p>
        </button>
      ) : (
        // Open message view
        <div className="bg-white max-w-lg w-[90%] p-6 rounded-2xl shadow-xl border-4 border-pink-300 text-center animate-fadeIn">
          <GiLoveLetter size={70} className="text-pink-500 mx-auto mb-3" />

          <h2 className="text-2xl font-bold text-pink-600 mb-3">
            💖 A Message From My Heart 💖
          </h2>

          <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-5">
            {loveMessage}
          </p>

          <button
            onClick={() => setOpen(false)}
            className="bg-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            Close 💌
          </button>
        </div>
      )}

      <div className="text-center mt-6">
        <Link
          to="/"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-pink-600 transition"
        >
          Back
        </Link>
      </div>
    </main>
  );
};

export default Message;
