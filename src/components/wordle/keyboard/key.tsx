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

  const handleClick = () => {
    if (letter) {
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

    if (enter) {
      const guessNumber = Object.values(guess).findIndex((w) => !w);
      console.log(Object.keys(word)[guessNumber]);
      setGuess((prev) => ({
        ...prev,
        [Object.keys(word)[guessNumber]]: prev.word,
        word: "",
      }));
      return;
    }
  };

  return (
    <button
      className={`${
        icon ? "sm:w-[74px] w-14" : "sm:size-12 size-9"
      } flex items-center justify-center border uppercase`}
      onClick={handleClick}
    >
      {letter || icon}
    </button>
  );
};
