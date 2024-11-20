"use client";

import { useWordContext } from "@/context/wordle/word-context";

interface KeyProps {
  letter?: string;
  icon?: React.ReactNode;
  del?: boolean;
  enter?: boolean;
}

export const Key = ({ letter, icon, del, enter }: KeyProps) => {
  const { word, guess, setGuess } = useWordContext();

  if (!word) return;

  const getKeyColor = () => {
    if (!letter) return "bg-white text-zinc-800";

    let color = "";

    for (let i = 0; i < word.length; i++) {
      const attempt = guess[i];
      if (attempt) {
        for (let j = 0; j < attempt.length; j++) {
          if (attempt[j].toLowerCase() === letter.toLowerCase()) {
            if (word[j].toLowerCase() === letter.toLowerCase()) {
              color = "bg-wordle-success text-white border-none";
            } else if (word.toLowerCase().includes(letter.toLowerCase())) {
              if (color !== "bg-wordle-success text-white border-none") {
                color = "bg-wordle-warning text-white border-none";
              }
            } else {
              if (!color) {
                color = "bg-wordle-error text-white border-none";
              }
            }
          }
        }
      }
    }

    return color || "bg-white text-zinc-800";
  };

  const handleClick = () => {
    if (letter && guess.word.length < word.length) {
      setGuess((prev) => ({
        ...prev,
        word: prev.word + letter,
      }));
      return;
    }

    if (del && guess.word.length > 0) {
      setGuess((prev) => ({
        ...prev,
        word: prev.word.slice(0, -1),
      }));
      return;
    }

    if (enter && guess.word.length === word.length) {
      const guessNumber = Object.values(guess).findIndex((w) => !w);

      setGuess((prev) => ({
        ...prev,
        [Object.keys(guess)[guessNumber]]: prev.word,
        word: "",
      }));
      return;
    }
  };

  return (
    <button
      className={`${getKeyColor()} ${icon ? "sm:w-[86px] w-14" : "sm:size-14 size-9"} flex items-center justify-center border uppercase rounded text-lg transition-all hover:brightness-90`}
      onClick={handleClick}
    >
      {letter || icon}
    </button>
  );
};
