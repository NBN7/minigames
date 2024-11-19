"use client";

import { useWordContext } from "@/context/wordle/word-context";
import { Box } from "@/components/wordle/guesser";

export const Guesser = () => {
  const { guess, word } = useWordContext();

  return (
    <div className="w-full flex items-center justify-center gap-2">
      {guess[0]
        ? guess[0]
            .split("")
            .map((letter, index) => <Box key={index} letter={letter} />)
        : word
            .split("")
            .map((_, index) => (
              <Box key={index} letter={guess.word.split("")[index]} />
            ))}
    </div>
  );
};
