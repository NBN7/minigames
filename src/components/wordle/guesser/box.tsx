"use client";

import { useGameContext } from "@/context/wordle";

interface BoxProps {
  letter?: string;
  index: number;
  compare?: boolean;
}

export const Box = ({ letter, index, compare }: BoxProps) => {
  const { word } = useGameContext();

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
        } sm:size-16 lg:size-[72px] size-12 flex items-center justify-center uppercase text-2xl font-semibold rounded transition-all`}
      >
        {letter}
      </div>
    );
  }

  return (
    <div className="sm:size-16 lg:size-[72px] size-12 flex items-center justify-center uppercase text-2xl border-2 font-semibold rounded transition-all">
      {letter}
    </div>
  );
};
