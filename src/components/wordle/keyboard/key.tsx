"use client";

import { useMemo } from "react";
import { useGameContext } from "@/context/wordle";
import { toast } from "sonner";

interface KeyProps {
  letter?: string;
  icon?: React.ReactNode;
  del?: boolean;
  enter?: boolean;
}

export const Key = ({ letter, icon, del, enter }: KeyProps) => {
  const { word, guess, setGuess, gameStatus } = useGameContext();

  const getKeyColor = useMemo(() => {
    if (!word) return "";

    if (!letter) return "bg-white";

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

    return color || "bg-white";
  }, [letter, word, guess]);

  const handleClick = async () => {
    if (!word) return;

    if (letter && guess.word.length < word.length && !gameStatus) {
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
      const res = await fetch(`/api/wordle/validate?word=${guess.word}`);
      const data = await res.json();

      if (!data.isValid) {
        toast.error(`La palabra ${guess.word} no es válida!`);
        return;
      }

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
      className={`${getKeyColor} ${
        icon ? "sm:w-[86px] w-14" : "sm:size-14 size-9"
      } flex items-center justify-center border uppercase rounded text-lg transition-all hover:brightness-90`}
      onClick={handleClick}
    >
      {letter || icon}
    </button>
  );
};
