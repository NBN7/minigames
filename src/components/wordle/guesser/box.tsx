"use client";

import { useWordContext } from "@/context/wordle/word-context";

interface BoxProps {
  letter?: string;
  index: number;
  compare?: boolean;
}

export const Box = ({ letter, index, compare }: BoxProps) => {
  const { word } = useWordContext();

  if (!word) return;

  const letterCorrect = word[index].toUpperCase() === letter;
  const letterIncluded = letter
    ? word.toLowerCase().includes(letter.toLowerCase())
    : false;

  if (compare) {
    return (
      <div
        className={`${
          letterCorrect
            ? "bg-wordle-success text-white"
            : letterIncluded
            ? "bg-wordle-warning text-white"
            : "bg-wordle-error text-white"
        } sm:size-[72px] size-16 flex items-center justify-center uppercase text-2xl font-semibold rounded transition-all`}
      >
        {letter}
      </div>
    );
  }

  return (
    <div className="sm:size-[72px] size-16 flex items-center justify-center uppercase text-2xl border-2 font-semibold rounded text-zinc-800">
      {letter}
    </div>
  );
};
