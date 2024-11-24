"use client";

import { useEffect, useCallback } from "react";
import { useGameContext } from "@/context/wordle";
import { Key } from "@/components/wordle/keyboard";
import { toast } from "sonner";
import { LETTERS, VALID_WORDS } from "@/constants/wordle";
import { DeleteIcon, ForwardIcon } from "lucide-react";

export const Keyboard = () => {
  const { word, guess, setGuess } = useGameContext();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!word) return;

      if (event.key === "Enter" && word.length === guess.word.length) {
        if (!(VALID_WORDS as string[]).includes(guess.word.toLowerCase())) {
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

      if (event.key === "Backspace" && guess.word.length > 0) {
        setGuess((prev) => ({ ...prev, word: prev.word.slice(0, -1) }));
        return;
      }

      if (event.code.includes("Key") && guess.word.length < word.length) {
        const letter = event.key.toUpperCase();
        setGuess((prev) => ({
          ...prev,
          word: prev.word + letter,
        }));
      }
    },
    [word, guess, setGuess]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="w-full flex flex-col gap-1">
      {[LETTERS.FIRST_ROW, LETTERS.SECOND_ROW, LETTERS.THIRD_ROW].map(
        (row, index) => (
          <div key={index} className="flex justify-center gap-1">
            {index === 2 && <Key icon={<DeleteIcon />} del />}
            {row.map((letter) => (
              <Key key={letter} letter={letter} />
            ))}
            {index === 2 && <Key icon={<ForwardIcon />} enter />}
          </div>
        )
      )}
    </div>
  );
};
