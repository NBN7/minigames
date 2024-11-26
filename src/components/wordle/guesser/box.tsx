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
        } flex size-12 items-center justify-center rounded text-2xl font-semibold uppercase transition-all sm:size-16 lg:size-[72px]`}
      >
        {letter}
      </div>
    );
  }

  return (
    <div className="flex size-12 items-center justify-center rounded border-2 text-2xl font-semibold uppercase transition-all sm:size-16 lg:size-[72px]">
      {letter}
    </div>
  );
};
