"use client";

import { useState, useEffect, useCallback } from "react";
import { useGameContext } from "@/context/wordle";
import { Key } from "@/components/wordle/keyboard";
import { toast } from "sonner";
import { LETTERS, VALID_WORDS } from "@/constants/wordle";
import { DeleteIcon, ForwardIcon } from "lucide-react";
import styles from "./keyboard.module.css";

export const Keyboard = () => {
  const { word, guess, setGuess, gameStatus } = useGameContext();
  const [shake, setShake] = useState(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!word || gameStatus) return;

      if (event.key === "Enter" && word.length === guess.word.length) {
        if (!(VALID_WORDS as string[]).includes(guess.word.toLowerCase())) {
          toast.error(`La palabra ${guess.word} no es válida!`);
          setShake(true);
          setTimeout(() => setShake(false), 300);
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
    [word, guess, setGuess, gameStatus],
  );

  const getKeyColor = (letter: string) => {
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
  };

  const handleEnter = () => {
    if (!word || (word.length === guess.word.length && !gameStatus)) {
      if (!(VALID_WORDS as string[]).includes(guess.word.toLowerCase())) {
        toast.error(`La palabra ${guess.word} no es válida!`);
        setShake(true);
        setTimeout(() => setShake(false), 300);
        return;
      }

      const guessNumber = Object.values(guess).findIndex((w) => !w);

      setGuess((prev) => ({
        ...prev,
        [Object.keys(guess)[guessNumber]]: prev.word,
        word: "",
      }));
    }
  };

  const handleBackspace = () => {
    if (guess.word.length > 0 && !gameStatus) {
      setGuess((prev) => ({ ...prev, word: prev.word.slice(0, -1) }));
    }
  };

  const handleKeyClick = (letter: string) => {
    if (word && guess.word.length < word.length && !gameStatus) {
      setGuess((prev) => ({
        ...prev,
        word: prev.word + letter,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className={`flex w-full select-none flex-col gap-1 ${shake ? styles.shake : ""}`}
    >
      {[LETTERS.FIRST_ROW, LETTERS.SECOND_ROW, LETTERS.THIRD_ROW].map(
        (row, index) => (
          <div key={index} className="flex justify-center gap-1">
            {index === 2 && (
              <Key icon={<DeleteIcon />} onClick={handleBackspace} />
            )}
            {row.map((letter) => (
              <Key
                key={letter}
                letter={letter}
                keyColor={getKeyColor(letter)}
                onClick={() => handleKeyClick(letter)}
              />
            ))}
            {index === 2 && (
              <Key icon={<ForwardIcon />} onClick={handleEnter} />
            )}
          </div>
        ),
      )}
    </div>
  );
};
