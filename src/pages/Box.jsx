import React, { useState } from "react";
import { GiLoveLetter } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

const Box = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "←", 0, "✔"];
  const [showPad, setShowPad] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const navigate = useNavigate();

  const secretCode = "020905";

  const handleClear = () => setEnteredCode("");

  const handleSubmit = () => {
    if (enteredCode === secretCode) {
      navigate("/card");
    } else {
      alert("Oops! Wrong code 😅");
      setEnteredCode("");
    }
  };

  const handleButtonClick = (num) => {
    if (enteredCode.length < 6) setEnteredCode((prev) => prev + num);
  };

  const handleChoice = (c) => {
    if (c === "←") return handleClear();
    if (c === "✔") return handleSubmit();
    return handleButtonClick(c);
  };

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center mx-auto">
      <div className="w-[450px] h-[400px] flex flex-col justify-center items-center space-y-4">
        <div className="w-full h-14 bg-pink-200 flex justify-center items-center gap-x-1.5">
          <p className="text-xl text-white font-semibold">Gift For My GF</p>
          <GiLoveLetter
            size={24}
            className="text-red-500 font-semibold animate-pulse duration-300 delay-200 hover:text-red-600"
          />
        </div>

        <div className="w-full h-[300px] grid grid-cols-2 justify-center items-start bg-pink-200 p-2">
          <div className="h-full flex justify-center items-center">
            <img
              src={asset("6.jpg")}
              alt=""
              className="w-[200px] h-[200px] object-cover rounded-full border-[5px] border-white border-dashed"
            />
          </div>

          <div className="flex justify-center items-center flex-col mt-4 space-y-2">
            {!showPad ? (
              <button
                onClick={() => setShowPad(true)}
                className="bg-pink-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-500 transition"
              >
                Enter Secret Code 💕
              </button>
            ) : (
              <>
                <div className="bg-white text-gray-700 text-lg px-3 py-1.5 rounded-md tracking-widest min-w-[180px] text-center">
                  {enteredCode || "----"}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {numbers.map((item, index) => (
                    <button
                      onClick={() => handleChoice(item)}
                      key={index}
                      className="bg-pink-400 text-white text-xl font-semibold py-2 w-14 rounded-md hover:bg-pink-500 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Box;
