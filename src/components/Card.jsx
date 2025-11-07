import React from "react";
import { Link } from "react-router-dom";

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

const Card = () => {
  const cardDatas = [
    { id: 1, image: "1.jpg", text: "You are my favorite person ❤️" },
    { id: 2, image: "2.jpg", text: "I fall for you more every day 💕" },
    { id: 3, image: "3.jpg", text: "You make my world brighter ✨" },
    { id: 4, image: "4.jpg", text: "My heart feels safe with you 💖" },
    { id: 5, image: "5.jpg", text: "You are my happiness in human form 🌸" },
    { id: 6, image: "6.jpg", text: "I love you more than words can say 💌" },
    { id: 7, image: "7.jpg", text: "Every moment with you is special 💘" },
    { id: 8, image: "8.jpg", text: "You are my forever person 💍" },
    { id: 9, image: "9.jpg", text: "My heart chooses you, always 💞" },
    { id: 10, image: "10.jpg", text: "You are my lucky charm 🍀" },
    { id: 11, image: "11.jpg", text: "Your smile is my favorite view 😊" },
    { id: 12, image: "12.jpg", text: "You make ordinary moments magical ✨" },
    { id: 13, image: "13.jpg", text: "I love you endlessly, truly, deeply ❤️" },
  ];

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-pink-100 px-4 py-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full text-center border-4 border-pink-300">
        <h1 className="text-3xl font-bold text-pink-600 mb-3 animate-pulse">
          🎁 A Special Gift Just for You 💖
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          You unlocked this because you're someone truly special to me.
          <br /> Enjoy these memories and messages made just for you. 😊💌
        </p>

        <div className="max-h-[350px] overflow-y-auto space-y-4 pr-2">
          {cardDatas.map((card) => (
            <div
              key={card.id}
              className="bg-pink-50 border border-pink-200 rounded-xl p-3 shadow-sm flex flex-col items-center"
            >
              <img
                src={asset(card.image)}
                alt={card.text}
                className="w-40 h-40 object-cover rounded-lg shadow-md border-4 border-white"
              />
              <p className="text-pink-600 font-medium mt-2 italic">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-pink-500 font-medium mt-4 italic">
          Made with love, always ❤️
        </p>
      </div>

      <Link to="/main" className="mt-3 text-pink-600 underline">
        Next
      </Link>
    </main>
  );
};

export default Card;
