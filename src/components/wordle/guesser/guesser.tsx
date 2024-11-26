"use client";

import { useGameContext } from "@/context/wordle";
import { Box } from "@/components/wordle/guesser";

export const Guesser = () => {
  const { guess, word } = useGameContext();

  if (!word) return;

  return (
    <div className="flex w-full select-none flex-col items-center justify-center gap-1 sm:gap-2">
      <div className="flex w-full items-center justify-center gap-1 sm:gap-2">
        {guess[0]
          ? guess[0]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : word
              .split("")
              .map((_, index) => (
                <Box
                  key={index}
                  letter={guess.word.split("")[index]}
                  index={index}
                />
              ))}
      </div>

      <div className="flex w-full items-center justify-center gap-1 sm:gap-2">
        {guess[1]
          ? guess[1]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : guess[0]
            ? word
                .split("")
                .map((_, index) => (
                  <Box
                    key={index}
                    letter={guess.word.split("")[index]}
                    index={index}
                  />
                ))
            : word
                .split("")
                .map((_, index) => <Box key={index} index={index} />)}
      </div>

      <div className="flex w-full items-center justify-center gap-1 sm:gap-2">
        {guess[2]
          ? guess[2]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : guess[1]
            ? word
                .split("")
                .map((_, index) => (
                  <Box
                    key={index}
                    letter={guess.word.split("")[index]}
                    index={index}
                  />
                ))
            : word
                .split("")
                .map((_, index) => <Box key={index} index={index} />)}
      </div>

      <div className="flex w-full items-center justify-center gap-1 sm:gap-2">
        {guess[3]
          ? guess[3]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : guess[2]
            ? word
                .split("")
                .map((_, index) => (
                  <Box
                    key={index}
                    letter={guess.word.split("")[index]}
                    index={index}
                  />
                ))
            : word
                .split("")
                .map((_, index) => <Box key={index} index={index} />)}
      </div>

      <div className="flex w-full items-center justify-center gap-1 sm:gap-2">
        {guess[4]
          ? guess[4]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : guess[3]
            ? word
                .split("")
                .map((_, index) => (
                  <Box
                    key={index}
                    letter={guess.word.split("")[index]}
                    index={index}
                  />
                ))
            : word
                .split("")
                .map((_, index) => <Box key={index} index={index} />)}
      </div>
    </div>
  );
};
